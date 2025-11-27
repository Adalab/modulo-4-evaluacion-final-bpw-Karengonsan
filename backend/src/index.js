const express = require("express");
const cors = require("cors");
const { authenticateToken } = require ("./middlewares/authenticate-token");
const { 
    getRecipesController,
    postRecipesController,
    getRecipesIdController,
    putRecipesController,
    patchRecipesIdController,
    postSignupController,
    postLoginController,
} = require("./controllers");
const app = express();
const port = 3000;

require("dotenv").config();

app.use(express.json({ limit: "25mb" }));

app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Endpoints

// Coger notas
app.get("/recipes", authenticateToken, getRecipesController);

// Obtener receta por su id
app.get("/recipe/:id", authenticateToken, getRecipesIdController);

// Crear una nueva receta
app.post("/recipes", authenticateToken,  postRecipesController);

// Actualizar una receta existente
app.put("/modify/:id", authenticateToken,  putRecipesController);

// Eliminar una receta
app.patch("/delete/:id", authenticateToken,  patchRecipesIdController);

// Usuarios
app.post("/signup", postSignupController);

app.post("/login", postLoginController);