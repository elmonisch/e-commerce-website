const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()

// Middleware
app.use(morgan["dev"]);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json("Hello amazon clone");
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT ", 3000);
    }
});