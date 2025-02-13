import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("tbl_cust_sub_category_2025", function (table) {
        table.increments("id").primary(); // ✅ Auto-increment primary key
        table.integer("CatId").notNullable();
        table.string("Name", 255).collate("utf8mb4_general_ci").defaultTo(null);
        table.string("Photo", 255).collate("utf8mb4_general_ci").defaultTo(null);

        // ✅ Ensure boolean is stored correctly in MySQL as tinyint(1)
        table.boolean("Status").notNullable().defaultTo(1);

        table.integer("FrId").notNullable();

        // ✅ Fix: Knex does not have .tinyint(), use .integer() with check constraint
        table.integer("ProdType").notNullable()
            .comment("0: custcat; 1: rawcat;")
            .checkBetween([0, 1]); 

        table.integer("CreatedBy").notNullable();

        // ✅ Fix: Ensure createdDate has a default value
        table.timestamp("CreatedDate").defaultTo(knex.fn.now()).notNullable();

        table.integer("ModifiedBy").notNullable();

        // ✅ Allow NULL for ModifiedDate (Fix for NULL constraint violation)
        table.timestamp("ModifiedDate").nullable().defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("tbl_cust_sub_category_2025");
}
