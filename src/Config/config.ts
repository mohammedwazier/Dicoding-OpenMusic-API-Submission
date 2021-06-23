import * as config from 'dotenv';
config.config();
export const PORT: number = Number(process.env.PORT) || 5000;
export const HOST: string = process.env.HOST || '0.0.0.0';
export const ENV: string = process.env.ENV || 'production';