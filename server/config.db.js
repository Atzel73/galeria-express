const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql2')

let connection;

try {
    connection = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
    });
} catch (error) {
    console.log("Error al conectar a la base de datos: " + error);
}

module.exports = { connection }