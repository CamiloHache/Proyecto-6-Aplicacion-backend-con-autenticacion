import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = Router();

router.post("/create", createProduct);
router.get("/readall", getAllProducts);
router.get("/readone/:id", getProductById);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;