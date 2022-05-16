import { Document, model, Schema } from "mongoose";

export interface CategoryInterface extends Document {
  name: string;
  parent: string | object;
}

const CategorySchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
  ancestors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

export default model<CategoryInterface>("Category", CategorySchema);
