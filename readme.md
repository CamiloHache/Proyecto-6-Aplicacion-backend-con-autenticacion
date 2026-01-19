# Proyecto 6 – Aplicación Backend con Autenticación 🔐

## 📌 Descripción

Este proyecto corresponde al **Proyecto 6 del Bootcamp Full Stack / Cohort 20 – UDD** y consiste en una **aplicación backend desarrollada con Node.js y Express**, que implementa **autenticación y autorización mediante JWT**, junto con un **CRUD completo de productos** protegido por middleware.

La aplicación permite:
- Registro y login de usuarios
- Encriptación segura de contraseñas
- Generación y validación de tokens JWT
- Protección de rutas
- Persistencia de datos en MongoDB usando Mongoose

El objetivo principal es aplicar conceptos fundamentales de backend moderno, seguridad, arquitectura REST y control de acceso.

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

---


## 📁 Estructura del proyecto

```
Proyecto-6
├─ controllers
│  └─ productController.js
│  └─ userController.js
├─ middlewares
│  └─ authMiddleware.js
├─ models
│  ├─ Product.js
│  └─ userModel.js
├─ routes
│  └─ productRoutes.js
│  └─ userRoutes.js
├─ .env
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ server.js
└─ README.md
```

---

## 🔐 Autenticación y autorización

### Registro de usuario
```
POST /api/user/register
```
Crea un nuevo usuario en la base de datos.  
La contraseña se almacena de forma segura utilizando **bcrypt** para el hash.

---

### Login de usuario
```
POST /api/user/login
```
Valida las credenciales del usuario y genera un **token JWT** que permite acceder a rutas protegidas.

---

### Uso del token JWT

Para acceder a rutas protegidas, el token debe enviarse en el header:

```
Authorization: Bearer TU_TOKEN
```

---

## 📦 CRUD de Productos (rutas protegidas)

⚠️ **Todas las rutas de producto requieren un token JWT válido**

### Crear producto
```
POST /api/product/create
```

### Obtener todos los productos
```
GET /api/product/readall
```

### Obtener un producto por ID
```
GET /api/product/readone/:id
```

### Actualizar producto
```
PUT /api/product/update/:id
```

### Eliminar producto
```
DELETE /api/product/delete/:id
```

---

## 🚀 Instalación y ejecución

1️⃣ Clonar el repositorio
```bash
git clone https://github.com/CamiloHache/Proyecto-6-Aplicacion-backend-con-autenticacion.git
```

2️⃣ Instalar dependencias
```bash
npm install
```

3️⃣ Crear archivo `.env` en la raíz
```env
PORT=3000
MONGODB_URI=TU_URI_DE_MONGODB
JWT_SECRET=TU_SECRETO
```

4️⃣ Iniciar el servidor
```bash
npm start
```

El servidor quedará corriendo en:
```
http://localhost:3000
```

---

## ✅ Estado del proyecto

✔ Registro de usuarios implementado  
✔ Login con JWT funcionando  
✔ Middleware de autenticación operativo  
✔ CRUD completo de productos  
✔ Rutas protegidas correctamente  
✔ Conexión a MongoDB Atlas estable  
✔ Arquitectura modular clara  
✔ Control de versiones con Git y GitHub  

---

## 👤 Autor

**Camilo Hache**  
Proyecto desarrollado de manera individual como parte del **Bootcamp Full Stack – UDD**