import { Product, ProductAttributes, ProductCreationAttributes } from "@models/billsoftadmin/selling-product/product-model";
import { db } from "config/knexconfig";
import { Op } from "sequelize";

export const get = async (ProdType: number | string): Promise<Product[]> => {
    try {
        // Ensure ProdType is a number (convert if it's a string)
        const prodTypeNum = Number(ProdType);
        if (isNaN(prodTypeNum)) {
            throw new Error("Invalid ProdType parameter");
        }

        const categories = await db('tbl_cust_products2 as tp')
            .leftJoin('tbl_cust_category_2025 as tc', 'tc.id', 'tp.CatId')
            .leftJoin('tbl_cust_sub_category_2025 as tcs', 'tcs.id', 'tp.SubCatId')
            .select(
                'tp.ProductName',
                'tp.CreatedDate',
                'tp.id',
                'tc.Name as CatName',
                'tcs.Name as SubCatName'
            )
            .where('tp.ProdType', prodTypeNum) // Ensure ProdType is passed as a number
            .orderBy('tp.CreatedDate', 'desc');

        if (!categories.length) {
            throw new Error(`No Raw Product found`);
        }

        return categories;
    } catch (error) {
        console.error("Error fetching Raw Product:", error);
        throw new Error("Failed to fetch Raw Product");
    }
};

export const create = async (
    saveRecord: ProductCreationAttributes,
    productDetails: { id: number; Qty: number; Unit: string }[]
): Promise<Product> => {
    try {
        const newRecord = await Product.create(saveRecord);
        const prodid = newRecord.id;

        console.log("New Product Inserted:", newRecord);

        // Insert multiple product details into tbl_raw_prod_make_qty_2025
        const insertData = productDetails.map((product) => ({
            RawQty: product.Qty,
            RawUnit: product.Unit,
            RawProdId: prodid, // Inserted Product ID
            CustProdId: product.id,
            MakingQty:product.Qty,
            MakingQtyUnit2:product.Unit,
            MakingQty2:product.Qty
        }));

        // Execute the bulk insert using Knex
        await db("tbl_raw_prod_make_qty_2025").insert(insertData);

        console.log("Product details inserted successfully!");

        return newRecord;
    } catch (error) {
        console.error("Error creating Product:", error);
        throw error;
    }
};


// Get category by ID
export const edit = async (id: number): Promise<Product | null> => {
    try {
        return await Product.findByPk(id);
    } catch (error) {
        console.error("Error fetching Product by ID:", error);
        throw error;
    }
};

export const destroy = async (id: number): Promise<boolean> => {
    try {
        const deletedCount = await Product.destroy({ where: { id } });
        return deletedCount > 0;
    } catch (error) {
        console.error("Error deleting Product:", error);
        throw error;
    }
};