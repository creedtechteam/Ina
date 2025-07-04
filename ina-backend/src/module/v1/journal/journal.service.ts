import {
  Injectable,
  OnModuleInit,
  Logger,
  InternalServerErrorException,
  UnprocessableEntityException,
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
import { Journal, JournalDocument } from './schema/journal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ENVIRONMENT } from 'src/common/environment';

dotenv.config();
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

    const privateKey = ENVIRONMENT.NEAR.PRIVATE_KEY;
    const accountId = ENVIRONMENT.NEAR.ACCOUNT_ID;
    const contractId = ENVIRONMENT.NEAR.CONTRACT_ID;
    const network = ENVIRONMENT.NEAR.NETWORK || 'testnet';

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
        contractId: ENVIRONMENT.NEAR.CONTRACT_ID,
        methodName: 'add_journal_entry',
        args: {
          content: payload.content,
          tags: payload.tags,
          is_private: payload.is_private,
        },
        gas: '300000000000000', // 300 Tgas
        attachedDeposit: utils.format.parseNearAmount('0'),
      });

      const transaction_hash = result.transaction.hash;
      const network = ENVIRONMENT.NEAR.NETWORK || 'testnet';

      const explorerUrl = `https://explorer.${network}.near.org/transactions/${transaction_hash}`;

      return await this.journalModel.create({
        user: this.account.accountId,
        is_private: payload.is_private,
        transaction_hash,
        url: explorerUrl,
      });
    } catch (error) {
      this.logger.error('Failed to add journal entry:', error);
      throw new UnprocessableEntityException('Failed to add journal entry');
    }
  }

  async getUserEntries(accountId: string): Promise<JournalDocument | null> {
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
      throw new UnprocessableEntityException(
        'Failed to retrieve journal entries',
      );
    }
  }

  async getPublicEntries(): Promise<JournalDocument[]> {
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
      throw new UnprocessableEntityException('NEAR service not initialized');
    }
  }
}
