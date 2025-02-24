import { db } from "config/knexconfig";

// Get Godown Account
export const get = async (OwnShop: number): Promise<any[]> => {
    try {
        if (isNaN(OwnShop)) {
            throw new Error("Invalid parameter");
        }

        const result = await db("tbl_transfer_godown_raw_prod_stock_2025 as tp")
            .leftJoin("tbl_users_bill as tu", "tu.id", "tp.GodownId")
            .leftJoin("tbl_users_bill as tu2", "tu2.id", "tp.FranchiseId")
            .select(
                "tp.StockDate",
                "tp.TotQty",
                "tp.TotalAmount",
                "tp.Narration",
                "tp.CreatedDate",
                "tp.id",
                "tu.Fname as GodownName",
                "tu2.ShopName"
            )
            .where("tp.OwnShop", OwnShop);

        if (!result.length) {
            throw new Error(`No stock found for OwnShop: ${OwnShop}`);
        }

        return result;
    } catch (error) {
        console.error("Error fetching Transfer Stock:", error);
        throw new Error("Failed to fetch Transfer Stock");
    }
};