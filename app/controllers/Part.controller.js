const Part = require('../models/Part');


const createPart = async (req, res) => {

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
        res.json({error: err});
    }
};

const listParts = async (req, res) => {
    try {
        let data = await Part.list();
        res.json({parts: data});
    }
    catch (err) {
        res.json({error: err});
    }
    
};

module.exports = {createPart, listParts};