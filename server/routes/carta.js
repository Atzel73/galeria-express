const express = require('express');
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const { connection } = require("../config.db")


const getCarta = (request, response) => {
    connection.query("SELECT * FROM carta",
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        });
};
app.route("/carta").get(getCarta);

const getCartaID = (request, response) => {
    const id = request.params.id;
    connection.query(`SELECT * FROM carta WHERE id = ${id}`,
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        }
    )
}
app.route("/getCarta/:id").get(getCartaID);

const putCarta = (request, response) => {
    const { plato, descripcion, precio, disponible } = request.body;
    const id = request.params.id
    try {
        connection.query(`UPDATE carta SET plato = ?, descripcion = ?, precio = ?, disponible  = ? WHERE id = ?`,
            [plato, descripcion, precio, disponible, id],
            (error, results) => {
                if (response.status(200)) {
                    console.log("Editado")
                } else {
                    console.log("Error al editar: ", error)
                }
            })
    } catch (error) {
        console.log("Error al actualizar")
    }
}
app.route("/putCarta/:id").put(putCarta)



const postCarta = (request, response) => {
    const { plato, descripcion, precio, disponible } = request.body;
    try {
        connection.query("INSERT INTO carta(plato, descripcion, precio, disponible) VALUES (?,?,?,?) ",
            [plato, descripcion, precio, disponible],
            (error, results) => {
                if (response.status(200)) {
                    // response.status(201).json({ "Item añadido correctamente": results.affectedRows });
                    console.log("Agregado")
                } else {
                    //throw error;
                    console.log(error);
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
};
app.route("/postCarta").post(postCarta);

const delCarta = (request, response) => {

    const id = request.params.id;
    connection.query("Delete from carta where id = ?",
        [id],
        (error, results) => {
            if (error)
                throw error;
            response.status(201).json({ "Item eliminado": results.affectedRows });
        });
};

app.route("/deleteCarta/:id").delete(delCarta);

module.exports = app;
