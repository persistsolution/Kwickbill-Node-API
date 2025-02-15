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

export const update = async (saveRecord: FrProductAttributes): Promise<FrProduct | null> => {
    try {
        // Extract id and other data
        const { id, checkstatus } = saveRecord;

        // Check if ID is provided
        if (!id) {
            console.error("ID is missing in update request");
            throw new Error("ID is required for updating the record");
        }

        console.log("Received ID for update:", id);

        // Find the existing record
        const existingRecord = await FrProduct.findByPk(id);

        if (!existingRecord) {
            console.error(`Record not found for ID: ${id}`);
            throw new Error("Record not found");
        }

        // Update checkstatus and any other provided fields
        await existingRecord.update({ checkstatus: checkstatus });

        console.log("Record Updated Successfully:", existingRecord);
        return existingRecord;
    } catch (error) {
        console.error("Error updating FrProduct:", error);
        throw error;
    }
};

