const bcrypt = require("bcryptjs");
const mysql = require("../database/mysql-pool");
const { generateToken } = require("../utils/jwt");

const postLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const query = "SELECT * FROM users WHERE email = ?";

        const connection = await mysql.getConnection();
        const [data] = await connection.query(query, [email]);
        connection.end();

        const user = data[0];

        if (!user) {
            return res.status(401).json({
                error: "Usuario inválido",
            });
        }

        const isPasswordCorrect =
            user === null
                ? false
                : await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                error: "Credenciales inválidas",
            });
        }

        const token = generateToken({
            id: user.id_user,
        });

        res.json({ token, name: user.name_user, id: user.id_user });
    } catch (error) {
        console.log(error);
        res.send("Algo ha salido mal");
    }
};

module.exports = {
    postLoginController,
};
