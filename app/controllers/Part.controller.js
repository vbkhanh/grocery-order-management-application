const Part = require('../models/Part');


const createPart = async (req, res, next) => {
    if(!req.body) {
        throw new Error("Content can not be empty!");
    }

    let newPart = new Part(req.body.partName, req.body.qoh, req.body.currentPrice);
    let data = await Part.create(newPart);
    res.status(200).json({parts: data});
      
};

const listParts = async (req, res, next) => {

    let data = await Part.list();
    res.status(200).json({Parts: data});
    
    
};

module.exports = {createPart, listParts};