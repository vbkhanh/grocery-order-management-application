
const PO = require('../models/PO');

const createPO = async (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: "Content can not be empty!"
        });
    }

    try {
        let newPO = new PO(req.body.partName, req.body.qoh, req.body.currentPrice);
        let data = await PO.create(newPO);
        res.json({parts: data});
    } catch (err) {
        console.log(err);
        res.json({error: err});
    }
};

const listPOs = async (req, res) => {
    if(!req.body) {
        res.status.json({
            message: "Content can not be empty!"
        });
    }

    try {
        let data = await PO.list(req.params.clientID);
        res.json({POs: data});
    } catch (err) {
        console.log(err);
        res.json({error: err});
    }

   
};
module.exports = {createPO, listPOs};