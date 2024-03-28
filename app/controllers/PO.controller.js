
const PO = require('../models/PO');

const createPO = async (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: "Content can not be empty!"
        });
    }

    try {
        let newPO = new PO(req.body.clientCompID, req.body.dataOfPO, req.body.poStatus);
        let data = await PO.create(newPO);
        res.json({po: data});
    } catch (err) {
        console.log(err);
        res.json({error: err});
    }
};

const listPOs = async (req, res) => {

    try {
        let data = await PO.list(req.params.clientID);
        res.json({POs: data});
    } catch (err) {
        console.log(err);
        res.json({error: err});
    }
};

module.exports = {createPO, listPOs};