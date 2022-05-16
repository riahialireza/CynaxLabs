import { Document, model, Schema } from "mongoose";

export interface ProductInterface extends Document {
  name: string;
  price: number;
  currency: string;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    lowercase: true,
  },
});

export default model<ProductInterface>("Product", ProductSchema);
