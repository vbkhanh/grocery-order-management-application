
const db = require('./db');

const PO = function(po) {
    this.clientCompID = po.clientCompID;
    this.dataOfPO = po.dataOfPO;
    this.status = po.status;
};

PO.create = (newPO, send) => {

    let query = 'INSERT INTO pos_x_024 (clientCompID024, dateOfPO024, status024) VALUES (?,?,?)';

    db.query(query, [newPO.clientCompID, newPO.dateOfPO, newPO.status], (err, res) => {
        if(err) {
            send(err, null);
            return;
        }
        send(null, res);
    });
};

PO.list = (clientID, res) => {
    let query = 'SELECT * FROM pos_x_024 WHERE clientCompID024 = ?';

    db.query(query, [clientID], (err, res) => {
        if(err) {
            send(err, null);
            return;
        }
        send(null, res);
    });
};

exports.module = PO;