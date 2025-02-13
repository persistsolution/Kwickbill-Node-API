import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  host: process.env.DEV_DB_HOST,
  port: Number(process.env.DEV_DB_PORT) || 5432,
  user: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_NAME,
});

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to DB successfully!');
    await client.end();
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

testConnection();
