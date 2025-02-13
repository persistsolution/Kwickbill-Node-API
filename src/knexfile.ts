import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg', // PostgreSQL client
    connection: {
      host: 'database-3.crq6yqcualdr.ap-south-1.rds.amazonaws.com',
      user: 'postgres',
      password: 'Rd9595454907',
      database: 'kwickbill_dev',
    },
    migrations: {
      directory: './migrations', // Path to migration files
    },
    seeds: {
      directory: './seeds', // Path to seed files (optional)
    },
  },
};

export default config;