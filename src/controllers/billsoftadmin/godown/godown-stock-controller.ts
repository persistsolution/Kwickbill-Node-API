import { Request, Response } from 'express';
import { get,getStockProdList,getStockProdDetails} from "@services/billsoftadmin/godown/godown-stock-services";

// Get Godown by Type
export const getController = async (req: Request, res: Response): Promise<void> => {
  try {
    const godowns = await get();
    res.status(200).json(godowns);
  } catch (error) {
    console.error("Error fetching Godown:", error);
    res.status(500).json({ message: "Failed to fetch Godown" });
}
};

// Get Godown stock product
export const getStockProdController = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await getStockProdList();
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching Godown Product:", error);
      res.status(500).json({ message: "Failed to fetch Godown Product" });
  }
  };

  // Get Godown stock product details
export const getStockProdDetailsController = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await getStockProdDetails(Number(req.params.pid),Number(req.params.godownid));
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching Godown Product:", error);
      res.status(500).json({ message: "Failed to fetch Godown Product" });
  }
  };
