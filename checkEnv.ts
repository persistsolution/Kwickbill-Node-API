import dotenv from 'dotenv';

dotenv.config();

console.log({
  DB_HOST: process.env.DEV_DB_HOST,
  DB_PORT: process.env.DEV_DB_PORT,
  DB_USER: process.env.DEV_DB_USER,
  DB_PASSWORD: process.env.DEV_DB_PASSWORD,
  DB_NAME: process.env.DEV_DB_NAME,
});
