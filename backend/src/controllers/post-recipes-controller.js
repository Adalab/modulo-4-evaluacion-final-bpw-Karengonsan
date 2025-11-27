const mysql = require ("../database/mysql-pool");

const postRecipesController = async (req, res) => {
    try {
        const { name, ingredients, instructions, fk_recipe } = req.body;

        const query =
            "INSERT INTO recipes (name, ingredients, instructions, fk_recipe) VALUES (?, ?, ?, ?)";

        const connection = await mysql.getConnection();
        await connection.query(query, [name, ingredients, instructions, fk_recipe ]);
        connection.end();

        res.status(201).send("Receta creada");
    } catch(error){
        res.send("Algo ha ido mal");
        console.log("error", error);
    }
}

module.exports={
    postRecipesController
}