const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));


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


app.get("/api", (require, response) => {
    response.json({ message: "Hello from server!" });
})
app.get("/message", (require, response) => {
    return response.send(Object.values(users))
})
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})


