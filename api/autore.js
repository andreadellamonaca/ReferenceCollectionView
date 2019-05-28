const express = require("express");
const db = require("../database");
const aut = require("../queries/autore");

const router = express.Router();

//handles url http://localhost:6001/autore/getAll
router.get("/getAll", (req, res, next) => {

    db.query(aut.getAll(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/getbykwVE/:id
router.get("/getbykwVE/:kwId", (req, res, next) => {
    db.query(aut.getByKWidVE(req.params.kwId), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/getbyidart/:id
router.get("/getbyidart/:id", (req, res, next) => {
    db.query(aut.getByidart(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/getbyid/:id
router.get("/getbyid/:id", (req, res, next) => {
    db.query(aut.getByid(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/getcoautori/:id
router.get("/getcoautori/:id", (req, res, next) => {
    db.query(aut.getcoautori(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/getavgcoautoribykwid/:id
router.get("/getavgcoautoribykwid/:id", (req, res, next) => {
    db.query(aut.getavgcoautbyKWid(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/getAllavgcoautori
router.get("/getAllavgcoautori", (req, res, next) => {
    db.query(aut.getAllavgcoaut(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/getAlltop5
router.get("/getAlltop5", (req, res, next) => {
    db.query(aut.getAlltop5aut(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/gettop5bykwid/:id
router.get("/gettop5bykwid/:id", (req, res, next) => {
    db.query(aut.gettop5autbyKWid(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/autore/gettop5coaut/:id
router.get("/gettop5coaut/:id", (req, res, next) => {
    db.query(aut.gettop5coaut(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

module.exports = router;