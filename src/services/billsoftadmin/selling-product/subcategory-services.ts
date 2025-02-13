import { SubCategory, SubCategoryCreationAttributes } from "@models/billsoftadmin/selling-product/subcategory-model";

// Get all categories
export const get = async (): Promise<SubCategory[]> => {
    return await SubCategory.findAll();
  };
  
  // Create a category
  export const create= async (
    data: SubCategoryCreationAttributes
  ): Promise<SubCategory> => {
    try {
      const newSubCategory = await SubCategory.create({ ...data }); // ✅ Auto-increment `id`
      console.log("New SubCategory Created:", newSubCategory);
      return newSubCategory;
    } catch (error) {
      console.error("Error creating SubCategory:", error);
      throw error;
    }
  };
  
  // Get category by ID
  export const edit = async (id: number): Promise<SubCategory | null> => {
    return await SubCategory.findByPk(id);
  };
  
  // Update category by ID
  export const update = async (id: number, updates: Partial<SubCategory>): Promise<SubCategory | null> => {
    const category = await SubCategory.findByPk(id);
    if (category) {
      await category.update(updates);
      return category;
    }
    return null;
  };
  
  // Delete category by ID
  export const destroy = async (id: number): Promise<boolean> => {
    const deletedCount = await SubCategory.destroy({ where: { id } });
    return deletedCount > 0;
  };


  
export const getSubCategory = async (CatId: number): Promise<Pick<SubCategory, "id" | "Name">[]> => {
  try {
      // Ensure ProdType is a valid number
      if (isNaN(CatId)) {
          throw new Error("Invalid ProdType parameter");
      }

      const categories = await SubCategory.findAll({
          where: { CatId },
          attributes: ["id", "Name"] // Select only 'id' and 'ProductName' fields
      });

      if (!categories.length) {
          throw new Error(`No categories found: ${CatId}`);
      }

      return categories;
  } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error("Failed to fetch Sub Category");
  }
};
