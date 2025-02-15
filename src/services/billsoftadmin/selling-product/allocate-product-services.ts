import { FrProduct, FrProductAttributes, FrProductCreationAttributes } from "@models/billsoftadmin/selling-product/allocate-product-model";
import { Op } from "sequelize";

export const get = async (CreatedBy: number): Promise<FrProduct[]> => {
    try {
        // Ensure ProdType is a valid number
        if (isNaN(CreatedBy)) {
            throw new Error("Invalid ProdType parameter");
        }

        const categories = await FrProduct.findAll({ where: { CreatedBy: CreatedBy } });

        if (!categories.length) {
            throw new Error(`No Product found`);
        }

        return categories;
    } catch (error) {
        console.error("Error fetching Product:", error);
        throw new Error("Failed to fetch Product");
    }
};

