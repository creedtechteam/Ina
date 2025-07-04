import * as dotenv from 'dotenv';
dotenv.config();

export interface IEnvironment {
  APP: {
    NAME: string;
    PORT: number | string;
    ENV: string;
    ENCRYPTION_KEY: string;
    LOG_LEVEL: string;
  };
  DB: {
    URL: string;
  };
  BLOCKCHAIN: {
    RPC_URL: string;
    RELAYER_PRIVATE_KEY: string;
    ENTRY_POINT_ADDRESS: string;
    ACCOUNT_FACTORY_ADDRESS: string;
    PAYMASTER_ADDRESS: string;
    USER_PROFILE_MODULE_ADDRESS: string;
    CREDENTIAL_VERIFICATION_MODULE_ADDRESS: string;
    ROLE_MODULE_ADDRESS: string;
  };
}

export const ENVIRONMENT: IEnvironment = {
  APP: {
    NAME: process.env.APP_NAME,
    PORT: process.env.PORT || process.env.APP_PORT || 3000,
    ENV: process.env.APP_ENV,
    ENCRYPTION_KEY: process.env.APP_ENCRYPTION_KEY,
    LOG_LEVEL: process.env.LOG_LEVEL,
  },
  DB: {
    URL: process.env.DB_URL,
  },
  BLOCKCHAIN: {
    RPC_URL: process.env.BLOCKCHAIN_RPC_URL,
    RELAYER_PRIVATE_KEY: process.env.RELAYER_PRIVATE_KEY,
    ENTRY_POINT_ADDRESS: process.env.ENTRY_POINT_ADDRESS,
    ACCOUNT_FACTORY_ADDRESS: process.env.ACCOUNT_FACTORY_ADDRESS,
    PAYMASTER_ADDRESS: process.env.PAYMASTER_ADDRESS,
    USER_PROFILE_MODULE_ADDRESS: process.env.USER_PROFILE_MODULE_ADDRESS,
    CREDENTIAL_VERIFICATION_MODULE_ADDRESS:
      process.env.CREDENTIAL_VERIFICATION_MODULE_ADDRESS,
    ROLE_MODULE_ADDRESS: process.env.ROLE_MODULE_ADDRESS,
  },
};

export const isDevEnvironment = ['development', 'dev', 'staging'].includes(
  ENVIRONMENT.APP.ENV?.toLowerCase(),
);

/**
 * Helper functions for environment checks
 */
export const isDevelopment = (): boolean =>
  ENVIRONMENT.APP.ENV === 'development';
export const isProduction = (): boolean => ENVIRONMENT.APP.ENV === 'production';
export const isTest = (): boolean => ENVIRONMENT.APP.ENV === 'test';
