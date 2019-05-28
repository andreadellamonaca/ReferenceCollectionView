const express = require("express");
const db = require("../database");
const kw = require("../queries/keyword");

const router = express.Router();

//handles url http://localhost:6001/keyword/getAll
router.get("/getAll", (req, res, next) => {

    db.query(kw.getAll(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/keyword/getbyidart/:idart
router.get("/getbyidart/:idart", (req, res, next) => {

    db.query(kw.getKWsByIdart(req.params.idart), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/keyword/gettop5kwbyKWid/:id
router.get("/gettop5kwbyKWid/:id", (req, res, next) => {

    db.query(kw.gettop5kwbyKWid(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/keyword/getAlltop5
router.get("/getAlltop5", (req, res, next) => {

    db.query(kw.getAlltop5(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

module.exports = router;