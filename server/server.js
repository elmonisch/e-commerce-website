const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET - Retrieve data from the server
app.get("/", (req, res) => {
    res.json("Hello amazon clone");
});

// POST - send data from the frontend to backend
app.post("/", (req, res) => {
    console.log(req.body.name);
    res.json("James is here!")
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT ", 3000);
    }
});