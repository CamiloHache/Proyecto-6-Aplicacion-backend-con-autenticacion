import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/create", authMiddleware, createProduct);
router.get("/readall", getAllProducts);
router.get("/readone/:id", getProductById);
router.put("/update/:id", authMiddleware, updateProduct);
router.delete("/delete/:id", authMiddleware, deleteProduct);

export default router;