const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require('dotenv')

dotenv.config()


app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(require('./routes/carta'))
const { connection } = require("./config.db")

let users = {
    1: {
        id: '1',
        username: 'Claudia Valdivieso',
    },
    2: {
        id: '2',
        username: 'Carlos Zárate',
    },
    3: {
        id: '3',
        username: 'Carlos Zárate',
    },
    4: {
        id: '5',
        username: 'Carlos Zárate',
    },
};


const getCarta = (request, response) => {
    connection.query("SELECT * FROM carta",
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        });
};
app.route("/carta").get(getCarta);



app.get("/api", (require, response) => {
    response.json({ message: "Hello from server!" });
})
app.get("/message", (require, response) => {
    return response.send(Object.values(users))
})
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, error => {
    if (error) {
        console.log(error)
        return;
    } else {
        console.log(`Server listening on port http:localhost:${PORT}`)
    }
})


