const Line = require('../models/Line');

const createLine = async (req, res) => {
    if(!req.body) {
        throw new Error("Content can not be empty!");
    }

   
    let newLine = new Line(req.body.poNo, req.body.partNo, req.body.priceOrdered, req.body.qty);
    let data = await Line.create(newLine);
    res.status(200).json({line: data});
   
};

const listLines = async (req, res) => {

    let data = await Line.list(req.params.poNo);
    res.status(200).json({Lines: data});
   

};

module.exports = {createLine, listLines};