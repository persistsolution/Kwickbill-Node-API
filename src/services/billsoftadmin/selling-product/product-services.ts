import { Product, ProductAttributes, ProductCreationAttributes } from "@models/billsoftadmin/selling-product/product-model";
import { Op } from "sequelize";

export const get = async (ProdType: number): Promise<Product[]> => {
    try {
        // Ensure ProdType is a valid number
        if (isNaN(ProdType)) {
            throw new Error("Invalid ProdType parameter");
        }

        const categories = await Product.findAll({ where: { ProdType: 0,ProdType2: { [Op.ne]: 3 } } });

        if (!categories.length) {
            throw new Error(`No Product found`);
        }

        return categories;
    } catch (error) {
        console.error("Error fetching Product:", error);
        throw new Error("Failed to fetch Product");
    }
};


export const create = async (
    saveRecord: ProductCreationAttributes
): Promise<Product> => {
    try {
        const newRecord = await Product.create(saveRecord);
        console.log("New Record:", newRecord);
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

export const update = async (
    id: number,
    updates: Partial<ProductAttributes>
): Promise<Product | null> => {
    try {
        const [rowsAffected, [updatedRecord]] = await Product.update(updates, {
            where: { id },
            returning: true,
        });
        return rowsAffected > 0 ? updatedRecord : null;
    } catch (error) {
        console.error("Error updating Product:", error);
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



