import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validación básica
    if (!name || !email || !password) {
    return res.status(400).json({
        message: "Todos los campos son obligatorios",
    });
    }

    // 2. Verificar si el usuario existe
    const userExists = await User.findOne({ email });
    if (userExists) {
    return res.status(400).json({
        message: "El usuario ya existe",
    });
    }

    // 3. Hashear password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Crear usuario
    const user = await User.create({
    name,
    email,
    password: hashedPassword,
    });

    // 5. Respuesta segura
    res.status(201).json({
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    });
} catch (error) {
    res.status(500).json({
    message: "Error al registrar usuario",
    error: error.message,
    });
}
};
