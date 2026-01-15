import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
res.send("API Proyecto 6 funcionando 🚀");
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Servidor corriendo en puerto ${PORT}`);
});
