import express from "express";
import {
  createProduct,
  getAllProducts
} from "../controllers/ProductController.js";

const router = express.Router();

// Crear producto
router.post("/create", createProduct);

// Obtener todos los productos
router.get("/readall", getAllProducts);

export default router;
