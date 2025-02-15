import { Request, Response } from 'express';
import { get} from "@services/billsoftadmin/selling-product/allocate-product-services";
// Get all Product
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
      const listed = await get(Number(req.params.CreatedBy));
      res.json(listed);
    } catch (error) {
      console.error("Error fetching Product:", error);
      res.status(500).json({ message: "Failed to fetch Product" });
    }
  };


  