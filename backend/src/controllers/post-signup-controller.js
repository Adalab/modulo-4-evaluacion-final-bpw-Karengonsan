const bcrypt = require("bcryptjs");
const mysql = require("../database/mysql-pool");
const { generateToken } = require("../utils/jwt");

const postSignupController = async (req, res) => {
    try {
        const { name_user, email, password } = req.body;
       
        const passwordHash = await bcrypt.hash(password, 10);

        const query =
            "INSERT INTO users (name_user, email, password) VALUES (?, ?, ?)";

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [
            name_user,
            email,
            passwordHash,
        ]);
        connection.end();

        console.log(data[0]);

        const token = generateToken({
            id: data[0].insertId,
        });

        res.json({ token, name: name_user, id: data[0].insertId });
    } catch (error) {
        console.log(error);
        res.send("Algo ha salido mal");
    }
};

module.exports = {
    postSignupController,
};
