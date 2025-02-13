import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("kwickbill_dev", "postgres", "Rd9595454907", {
  host: "database-3.crq6yqcualdr.ap-south-1.rds.amazonaws.com",
  dialect: "postgres", // Or 'mysql' | 'mssql' | 'sqlite'
});
