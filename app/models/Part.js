
const db = require('./db');

const Part = function (partName, qoh, currentPrice) {
    this.partName = partName;
    this.qoh = qoh;
    this.currentPrice = currentPrice;
};

Part.create = (newPart) => {
    return new Promise((resolve, reject) => {
        let query = 'INSERT INTO parts_x_024 (partName024, qoh024, currentPrice024) VALUES (?,?,?)';

        db.query(query, [newPart.partName, newPart.qoh, newPart.currentPrice], (err, res) => {
            if(err) {
                reject(err);
            }
            resolve(res);
        });
    });

    
};

Part.list = () => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT partNo024, partName024, currentPrice024 FROM parts_x_024';
        db.query(query, (err, res) => {
            if(err) {
               reject(err);
            }
           resolve(res);
        });
    });


};


module.exports = Part;
