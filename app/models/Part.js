
const db = require('./db');

const Part = function (part) {
    this.partName = part.partName;
    this.qoh = part.qoh;
    this.currentPrice = part.currentPrice;
};

Part.create = (newPart, send) => {

    let query = 'INSERT INTO parts_x_024 (partName024, qoh024, currentPrice024) VALUES (?,?,?)';

    db.query(query, [newPart.partName, newPart.qoh, newPart.currentPrice], (err, res) => {
        if(err) {
            send(err, null);
        }
        send(null, res);
    });
};

Part.list = (send) => {
    let query = 'SELECT partNo024, partName024, currentPrice024 FROM parts_x_024';

    db.query(query, (err, res) => {
        if(err) {
            send(err, null);
        }
        send(null, res);
    });
};


module.exports = Part;
