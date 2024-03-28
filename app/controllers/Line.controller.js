const Line = require('../models/Line');

const createLine = async (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: "Content can not be empty!"
        });
    }

    try {
        let newLine = new Line(req.body.poNo, req.body.partNo, req.body.priceOrdered, req.body.qty);
        let data = await Line.create(newLine);
        res.json({line: data});
    } catch (err) {
        res.json({error: err});
    }
};

const listLines = async (req, res) => {
/*
    try {
        let data = await Line.list(req.params.poNo);
    } catch (err) {
        
    }
*/
};