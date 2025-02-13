import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("kwickbill_test", "postgres", "pgrajat12345", {
  host: "database-5.crq6yqcualdr.ap-south-1.rds.amazonaws.com",
  dialect: "postgres", // Or 'mysql' | 'mssql' | 'sqlite'
});
