import { knex } from "knex";

export const db = knex({
  client: "pg",
  connection: {
    host: "database-3.crq6yqcualdr.ap-south-1.rds.amazonaws.com", // Update with your DB host
    user: "postgres", // Update with your DB username
    password: "Rd9595454907", // Update with your DB password
    database: "kwickbill_dev", // Update with your DB name
  },
  migrations: {
    directory: "./migrations", // Directory for migration files
  },
  seeds: {
    directory: "./seeds", // Directory for seed files
  }, 
});