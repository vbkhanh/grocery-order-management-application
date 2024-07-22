
const PO = require('../models/PO');

const createPO = async (req, res) => {
    if(!req.body) {
        throw new Error("Content can not be empty!");
    }
   
    let newPO = new PO(req.body.clientCompID, req.body.dataOfPO, req.body.poStatus);
    let data = await PO.create(newPO);
    res.status(200).json({po: data});
};

const listPOs = async (req, res) => {

    let data = await PO.list(req.params.clientID);
    res.status(200).json({POs: data});
   
};

module.exports = {createPO, listPOs};