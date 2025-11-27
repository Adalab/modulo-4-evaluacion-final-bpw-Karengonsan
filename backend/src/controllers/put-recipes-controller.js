const mysql = require ("../database/mysql-pool");

const putRecipesController = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, ingredients, instructions } = req.body;

        const query =
            "UPDATE recipes SET name = ?, ingredients = ?, instructions = ? WHERE id_recipe = ?";

        const connection = await mysql.getConnection();
        await connection.query(query, [name, ingredients, instructions || null, id]);
        connection.end();

        res.send("Receta modificada");
    } catch {
        res.send("Algo ha ido mal");
    }
};

module.exports={
    putRecipesController
}