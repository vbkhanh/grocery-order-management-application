
const db = require('./db');

const PO = function(clientCompID, dataOfPO, poStatus) {
    this.clientCompID = clientCompID;
    this.dataOfPO = dataOfPO;
    this.status = poStatus;
};

PO.create = (newPO) => {
    return new Promise((resolve, reject) => {
        let query = 'INSERT INTO pos_x_024 (clientCompID024, dateOfPO024, status024) VALUES (?,?,?)';

        db.query(query, [newPO.clientCompID, newPO.dateOfPO, newPO.status], (err, res) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(res);
        });        
    });
};

PO.list = (clientID) => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM pos_x_024 WHERE clientCompID024 = ?';

        db.query(query, [clientID], (err, res) => {
            if(err) {
                reject(err);
            }
            resolve(res);
        });
    });
};

module.exports = PO;