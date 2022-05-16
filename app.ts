import mongoose from "mongoose";
import CategoriesService from "./q1/q1";

const q1 = async () => {
  await mongoose.connect("mongodb://localhost:27017/cynaxLabs");
  await CategoriesService.createTree();
  const rootCat = await CategoriesService.getFirstLevelChildren();
  console.log(rootCat);
  console.log(await CategoriesService.getAllChildrenOfCategory(rootCat[0]._id));
};

// q1();
