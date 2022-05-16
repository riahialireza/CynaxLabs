/** Q1. We have an online store with items organized in categories, sub-categories, and
sub-sub-categories up to N levels. Draw the database structure for the online store
with the category tree to store things. Each category has a name. The number and
level of categories can go up to infinite.
Write a query to fetch all the first-level children (categories+items) for a category.
Write a query to fetch all the children (categories+items) at all category levels for a
category.
*/
import Category, { CategoryInterface } from "./category.model";

export default class CategoriesService {
  constructor(public name: string, public parent: string) {
    this.name = name;
    this.parent = parent;
  }

  static async createTree() {
    for (let i = 1; i < 4; i++) {
      const rootCat: CategoryInterface = await new Category({
        name: `Category ${i}`,
      }).save();
      for (let j = 1; j < 3; j++) {
        const level1Cat: CategoryInterface = await new Category({
          name: `Category ${i}-${j}`,
          parent: rootCat._id,
          ancestors: [rootCat._id],
        }).save();
        for (let k = 1; k < 3; k++) {
          await new Category({
            name: `Category ${i}-${j}-${k}`,
            parent: level1Cat._id,
            ancestors: [rootCat._id, level1Cat._id],
          }).save();
        }
      }
    }
  }

  static async getFirstLevelChildren(): Promise<CategoryInterface[]> {
    const categories: CategoryInterface[] = await Category.find({
      parent: null,
    });
    return categories;
  }

  static async getAllChildrenOfCategory(
    categoryId: string
  ): Promise<CategoryInterface[]> {
    const category: any = await Category.findById(categoryId);
    const categories: CategoryInterface[] = await Category.find({
      $or: [{ ancestors: category._id }, { _id: category._id }],
    });
    return categories;
  }
}
