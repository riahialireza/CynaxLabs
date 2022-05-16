import express from "express";
import Product from "./product.model";
const router = express.Router();

router.post("/product", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.get("/product/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/product/:id", async (req, res, next) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({});
  } catch (error) {
    next(error);
  }
});

router.put("/product/:id", async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

export default router;
