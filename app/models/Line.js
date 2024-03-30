
const db = require('./db');

const Line = function(poNo, partNo, priceOrdered, qty) {
    this.poNo = poNo;
    this.partNo = partNo;
    this.priceOrdered = priceOrdered;
    this.qty = qty;
};

Line.create = (newLine) => {
    return new Promise((resolve, reject) => {
        let query = 'INSERT INTO lines_x_024 (poNo024, partNo24, qty024, priceOrdered024) VALUES (?,?,?,?)'

        db.query(query, [newLine.poNo, newLine.partNo, newLine.qty, newLine.priceOrdered], (err, res) => {
            if(err) {
                reject(err);
            }
            resolve(res);
        });        
    });
};

Line.list = (poNo) => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM lines_x_024 WHERE poNo024 = ?';

        db.query(query, [poNo], (err, res) => {
            if(err) {
                reject(err);
            }
            resolve(res);
        });        
    });
};


module.exports = Line;
