import { Request, Response } from 'express';
import { get,create,edit,destroy} from "@services/billsoftadmin/raw-product/product-services";
// Get all Product
export const getController = async (req: Request, res: Response): Promise<void> => {
    try {
      const listed = await get(Number(req.params.ProdType));
      res.json(listed);
    } catch (error) {
      console.error("Error fetching Product:", error);
      res.status(500).json({ message: "Failed to fetch Product" });
    }
  };

    // Create Product
    export const createController = async (req: Request, res: Response): Promise<void> => {
        try {
            // Parse `productdetails` if it's sent as a string (from Postman form-data)
            const productDetails = req.body.productdetails
                ? JSON.parse(req.body.productdetails) // Convert string to JSON array
                : [];
    
            if (!Array.isArray(productDetails) || productDetails.length === 0) {
                res.status(400).json({ message: "Product details array is required" });
                return;
            }
    
            // Validate each item in `productdetails`
            const validProductDetails = productDetails.filter(
                (item) => item.id && item.Qty && item.Unit
            );
    
            if (validProductDetails.length === 0) {
                res.status(400).json({ message: "Invalid product details format" });
                return;
            }
    
            // Call service function to create product + details
            const createdProduct = await create(req.body, validProductDetails);
    
            console.log("✅ Product Created Successfully:", createdProduct);
    
            res.status(201).json({
                message: "Product and details created successfully",
                productId: createdProduct.id,
                product: createdProduct,
                productdetails: validProductDetails
            });
        } catch (error) {
            console.error("Error creating Product:", error);
            res.status(500).json({ message: "Failed to create Product", error });
        }
    };
    

    
      // Get Product by ID
    export const editController = async (req: Request, res: Response): Promise<void> => {
      try {
        const edited = await edit(Number(req.params.id));
        if (!edited) {
          res.status(404).json({ message: "Product not found" });
        } else {
          res.json(edited);
        }
      } catch (error) {
        console.error("Error fetching Product by ID:", error);
        res.status(500).json({ message: "Failed to fetch Product" });
      }
    };
    

    
    // Delete Product
    export const deleteController = async (req: Request, res: Response): Promise<void> => {
      try {
        const deleted = await destroy(Number(req.params.id));
        if (deleted) {
          res.status(200).json({ message: "delete Product successfully" });
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        console.error("Error deleting Product:", error);
        res.status(500).json({ message: "Failed to delete Product" });
      }
    };
    