import * as dotenv from 'dotenv';
dotenv.config();

export interface IEnvironment {
  APP: {
    NAME: string;
    PORT: number | string;
    ENV: string;
  };
  DB: {
    URL: string;
  };
  NEAR: {
    NETWORK: string;
    ACCOUNT_ID: string;
    PRIVATE_KEY: string;
    CONTRACT_ID: string;
  };
}

export const ENVIRONMENT: IEnvironment = {
  APP: {
    NAME: process.env.APP_NAME,
    PORT: process.env.PORT || process.env.APP_PORT || 3000,
    ENV: process.env.APP_ENV,
  },
  DB: {
    URL: process.env.DB_URL,
  },
  NEAR: {
    NETWORK: process.env.NEAR_NETWORK,
    ACCOUNT_ID: process.env.NEAR_ACCOUNT_ID,
    PRIVATE_KEY: process.env.NEAR_PRIVATE_KEY,
    CONTRACT_ID: process.env.NEAR_CONTRACT_ID,
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
