// src/module/near/near.service.ts
import {
  Injectable,
  OnModuleInit,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  connect,
  keyStores,
  Contract,
  KeyPair,
  Account,
  utils,
} from 'near-api-js';
import * as dotenv from 'dotenv';
import { CreateJournalEntryDto } from './dto/journal.dto';
import { TagEnum } from 'src/module/v1/journal/enums/journal.enum';
import { Journal, JournalDocument } from './schema/journal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

dotenv.config();

export interface JournalEntry {
  user: string;
  content: string;
  tags: TagEnum[];
  is_private: boolean;
}

@Injectable()
export class JournalService implements OnModuleInit {
  constructor(
    @InjectModel(Journal.name) private journalModel: Model<JournalDocument>,
  ) {}

  private readonly logger = new Logger(JournalService.name);
  private account: Account;
  private contract: Contract;
  private isInitialized = false;

  async onModuleInit() {
    try {
      await this.initializeNearConnection();
    } catch (error) {
      this.logger.error('Failed to initialize NEAR service:', error);
      throw new InternalServerErrorException(
        'NEAR service initialization failed',
      );
    }
  }

  private async initializeNearConnection() {
    const keyStore = new keyStores.InMemoryKeyStore();

    const privateKey = process.env.NEAR_PRIVATE_KEY;
    const accountId = process.env.NEAR_ACCOUNT_ID;
    const contractId = process.env.NEAR_CONTRACT_ID;
    const network = process.env.NEAR_NETWORK || 'testnet';

    if (!privateKey || !accountId || !contractId) {
      throw new Error('Missing NEAR environment variables');
    }

    const keyPair = KeyPair.fromString(privateKey);
    await keyStore.setKey(network, accountId, keyPair);

    const near = await connect({
      networkId: network,
      nodeUrl: `https://rpc.${network}.near.org`,
      walletUrl: `https://wallet.${network}.near.org`,
      helperUrl: `https://helper.${network}.near.org`,
      deps: { keyStore },
    });

    this.account = await near.account(accountId);
    await this.account.state();

    this.contract = new Contract(this.account, contractId, {
      viewMethods: ['get_user_entries', 'get_public_entries'],
      changeMethods: ['add_journal_entry'],
    });

    this.isInitialized = true;
    this.logger.log(`NEAR connected to ${contractId} successfully`);
  }

  // async addJournalEntry(payload: CreateJournalEntryDto) {
  //   this.ensureInitialized();
  //   try {
  //     const result = await this.contract['add_journal_entry'](
  //       {
  //         content: payload.content,
  //         tags: payload.tags,
  //         is_private: payload.is_private,
  //       },
  //       '300000000000000',
  //       '0',
  //     );
  //     const transactionId = result;
  //     return {
  //       message: 'Journal entry added successfully',
  //       receipt: transactionId,
  //     };
  //   } catch (error) {
  //     this.logger.error('Failed to add journal entry:', error);
  //     throw error;
  //   }
  // }

  async addJournalEntry(payload: CreateJournalEntryDto) {
    this.ensureInitialized();
    try {
      const result = await this.account.functionCall({
        contractId: process.env.NEAR_CONTRACT_ID,
        methodName: 'add_journal_entry',
        args: {
          content: payload.content,
          tags: payload.tags,
          is_private: payload.is_private,
        },
        gas: '300000000000000', // 300 Tgas
        attachedDeposit: utils.format.parseNearAmount('0'),
      });

      const transactionId = result.transaction.hash;
      const network = process.env.NEAR_NETWORK || 'testnet';

      const explorerUrl = `https://explorer.${network}.near.org/transactions/${transactionId}`;

      return await this.journalModel.create({
        user: this.account.accountId,
        is_private: payload.is_private,
        transactionId,
        url: explorerUrl,
      });
    } catch (error) {
      this.logger.error('Failed to add journal entry:', error);
      throw new InternalServerErrorException('Failed to add journal entry');
    }
  }

  async getUserEntries(accountId: string): Promise<JournalEntry | null> {
    this.ensureInitialized();
    try {
      const entry = await this.contract['get_user_entries']({
        user: accountId,
      });

      if (!entry) {
        this.logger.log(`No journal entry found for ${accountId}`);
        return null;
      }

      this.logger.log(`Retrieved journal entry for ${accountId}`);

      return entry;
    } catch (error) {
      this.logger.error('Failed to get user entries:', error);
      throw new InternalServerErrorException(
        'Failed to retrieve journal entries',
      );
    }
  }

  async getPublicEntries(): Promise<JournalEntry[]> {
    this.ensureInitialized();
    try {
      return await this.contract['get_public_entries']();
    } catch (error) {
      this.logger.error('Failed to get public entries:', error);
      throw new InternalServerErrorException(error.message);
    }
  }

  private ensureInitialized() {
    if (!this.isInitialized) {
      throw new InternalServerErrorException('NEAR service not initialized');
    }
  }
}
