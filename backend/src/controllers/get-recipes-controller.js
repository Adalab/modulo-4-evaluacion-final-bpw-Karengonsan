const mysql = require ("../database/mysql-pool");

const getRecipesController = async (req, res) => {
    try {
        const userId = req.user.id;
        const query = "SELECT * FROM recipes WHERE fk_recipe = ? AND deleted_at IS NULL";

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [userId]);
        connection.end();
        res.json(data[0]);
    } catch {
        res.send("Algo ha ido mal");        
    }
};

module.exports={
    getRecipesController
}