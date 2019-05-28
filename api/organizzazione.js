const express = require("express");
const db = require("../database");
const org = require("../queries/organizzazione");

const router = express.Router();

//handles url http://localhost:6001/organizzazione/getbyidaut/:id
router.get("/getbyidaut/:id", (req, res, next) => {
    db.query(org.getByidaut(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/organizzazione/getAlltop5
router.get("/getAlltop5", (req, res, next) => {
    db.query(org.getAlltop5org(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/organizzazione/gettop5byKWid/:id
router.get("/gettop5byKWid/:id", (req, res, next) => {
    db.query(org.gettop5orgbyKWid(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

module.exports = router;