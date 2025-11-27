const mysql = require ("../database/mysql-pool");

const patchRecipesIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const query = "UPDATE recipes SET deleted_at = NOW() WHERE id_recipe = ?";

        const connection = await mysql.getConnection();
        await connection.query(query, [id]);
        connection.end();

        res.json({ message: "Receta eliminada" });
    } catch(error) {
        res.status(400).json({ error: "Algo ha ido mal" });
        console.log("errorsito", error)
    }
}

module.exports={
    patchRecipesIdController
}