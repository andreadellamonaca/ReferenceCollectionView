const express = require("express");
const db = require("../database");
const art = require("../queries/articolo");

const router = express.Router();

//handles url http://localhost:6001/articolo/getbykwVE/:id
router.get("/getbykwVE/:kwId", (req, res, next) => {
    db.query(art.getByKWidVE(req.params.kwId), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getAllVE
router.get("/getAllVE", (req, res, next) => {
    db.query(art.getAllVE(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getbyid/:id
router.get("/getbyid/:id", (req, res, next) => {
    db.query(art.getByid(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getlinks/:id
router.get("/getlinks/:id", (req, res, next) => {
    db.query(art.getlinks(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getreferences/:id
router.get("/getreferences/:id", (req, res, next) => {
    db.query(art.getreferences(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getbyidaut/:id
router.get("/getbyidaut/:id", (req, res, next) => {
    db.query(art.getByidaut(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getartannobyidkw/:id
router.get("/getartannobyidkw/:id", (req, res, next) => {
    db.query(art.getArtAnnobyidKW(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getAllartanno
router.get("/getAllartanno", (req, res, next) => {
    db.query(art.getAllArtAnno(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getartrepobyidkw/:id
router.get("/getartrepobyidkw/:id", (req, res, next) => {
    db.query(art.getArtRepobyidKW(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getAllartrepo
router.get("/getAllartrepo", (req, res, next) => {
    db.query(art.getAllArtRepo(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getavgrefsidkw/:id
router.get("/getavgrefsidkw/:id", (req, res, next) => {
    db.query(art.getavgrefsbyKWid(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getAllavgrefs
router.get("/getAllavgrefs", (req, res, next) => {
    db.query(art.getAllavgrefs(), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

//handles url http://localhost:6001/articolo/getcountartbyautid/:id
router.get("/getcountartbyautid/:id", (req, res, next) => {
    db.query(art.getCountArtByidaut(req.params.id), (err, data)=> {
        if(!err) {
            res.status(200).json(data);
        }
    });    
});

module.exports = router;