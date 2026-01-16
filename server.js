import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/product", productRoutes);

// Conexión a MongoDB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("🟢 MongoDB conectado"))
.catch((error) => console.error("🔴 Error MongoDB:", error));

// Ruta de prueba
app.get("/", (req, res) => {
res.send("Servidor funcionando y conectado a MongoDB");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
