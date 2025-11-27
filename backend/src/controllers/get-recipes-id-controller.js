const mysql = require ("../database/mysql-pool");

const getRecipesIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const query = "SELECT * FROM recipes WHERE id_recipe = ?";

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [id]);
        connection.end();

        res.json(data[0]);
    } catch {
        res.send("Algo ha ido mal");
    }
}

module.exports={
    getRecipesIdController
}