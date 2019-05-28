const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const keyword = require("./api/keyword");
const autore = require("./api/autore");
const articolo = require("./api/articolo");
const organizzazione = require("./api/organizzazione");

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.use("/keyword", keyword);
app.use("/autore", autore);
app.use("/articolo", articolo);
app.use("/organizzazione", organizzazione);

//Request Not Found
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//Request Not Implemented
app.use((err, req, res, next) => {
    res.status(err.status || 501);
    res.json({
        error: {
            code: err.status || 501,
            message: err.message
        }
    });
});

module.exports = app;