const Part = require('../models/Part');


const createPart = async (req, res, next) => {

    if(!req.body) {
        res.status(400).json({
            message: "Content can not be empty!"
        });
    }

    try {
        let newPart = new Part(req.body.partName, req.body.qoh, req.body.currentPrice);
        let data = await Part.create(newPart);
        res.json({parts: data});
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const listParts = async (req, res, next) => {
    try {
        let data = await Part.list();
        res.json({Parts: data});
    }
    catch (err) {
        next(err);
    }
    
};

module.exports = {createPart, listParts};