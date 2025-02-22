import { GodownStock, GodownStockAttributes, GodownStockCreationAttributes } from "@models/billsoftadmin/godown/godown-stock-model";
import { Product, ProductAttributes, ProductCreationAttributes } from "@models/billsoftadmin/selling-product/product-model";
import { db } from "config/knexconfig";
import { Op, QueryTypes } from "sequelize";

export interface StockProdDetails {
    Unit: string;
    Price: number;
    balqty: number;
    CgstPer: number;
    SgstPer: number;
    IgstPer: number;
}

// Get Godown Account
export const get = async (): Promise<GodownStock[]> => {
    try {
        const result = await db('tbl_godown_raw_prod_stock_2025 as ts')
            .innerJoin('tbl_cust_products2 as p', 'ts.ProdId', 'p.id')
            .innerJoin('tbl_users_bill as tub', 'ts.GodownId', 'tub.id')
            .select(
                'ts.StockDate',
                'ts.Qty',
                'ts.Unit',
                'ts.Price',
                'ts.TotalPrice',
                'ts.id',
                'p.ProductName',
                'tub.Fname'
            )
            .where('ts.UserId', '0')
            .andWhere('ts.Status', 'Cr');

        if (!result || result.length === 0) {
            throw new Error("No godown stock found");
        }

        return result;
    } catch (error) {
        console.error("Error fetching godown stock:", error);
        throw new Error("Failed to fetch godown stock");
    }
};


export const getStockProdList = async (): Promise<Product[]> => {
    try {
        return await Product.findAll({
            attributes: ['id', 'ProductName'],
            where: {
                Status: 1,
                ProdType2: {
                    [Op.in]: [1, 3]
                }
            },
            order: [['ProductName', 'ASC']]
        });
    } catch (error) {
        console.error("Error fetching stock product list:", error);
        throw error;
    }
};

export const getStockProdDetails = async (
    pid: number,
    godownid: number
): Promise<StockProdDetails> => {
    try {
        // Fetch product details
        const product = await db('tbl_cust_products2')
            .select('Unit', 'MinPrice', 'CgstPer', 'SgstPer', 'IgstPer')
            .where({ id: pid })
            .first();

        if (!product) {
            throw new Error('Product not found');
        }

        // Calculate balance quantity using a raw aggregate query
        const balResult = await db('tbl_godown_raw_prod_stock_2025')
            .where({ ProdId: pid, GodownId: godownid })
            .select(
                db.raw(
                    `COALESCE(SUM(CASE WHEN "Status" = 'Cr' THEN CAST("Qty" AS numeric) ELSE 0 END), 0) -
       COALESCE(SUM(CASE WHEN "Status" = 'Dr' THEN CAST("Qty" AS numeric) ELSE 0 END), 0) as balqty`
                )
            )
            .first();

        // Ensure balance quantity is non-negative
        let balqty = parseFloat(balResult?.balqty) || 0;
        if (balqty < 0) {
            balqty = 0;
        }

        return {
            Unit: product.Unit,
            Price: product.MinPrice,
            balqty,
            CgstPer: product.CgstPer,
            SgstPer: product.SgstPer,
            IgstPer: product.IgstPer,
        };
    } catch (error) {
        console.error("Error fetching stock product details:", error);
        throw error;
    }
};
