import { Request, Response } from 'express';
import { get} from "@services/billsoftadmin/godown/transfer-stock-services";

// Get Godown by Type
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
        const OwnShop = Number(req.params.OwnShop);

        if (isNaN(OwnShop)) {
            res.status(400).json({ message: "Invalid parameter" });
            return;
        }

        const result = await get(OwnShop);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching Transfer Stock:", error);
        res.status(500).json({ message: "Failed to fetch Transfer Stock" });
    }
};