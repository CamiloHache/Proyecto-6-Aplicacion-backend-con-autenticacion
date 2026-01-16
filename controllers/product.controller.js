import Product from "../models/Product.js";

//Crear un producto

export const createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    const newProduct = new Product({
      name,
      price,
      stock
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
