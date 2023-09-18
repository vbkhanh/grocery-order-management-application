
const db = require('./db');

const Line = function(line) {
    this.poNo = line.poNo;
    this.partNo = line.partNo;
    this.priceOrdered = line.priceOrdered;
    this.qty = line.qty;
};

Line.create = (newLine, send) => {

    let query = 'INSERT INTO lines_x_024 (poNo024, partNo24, qty024, priceOrdered024) VALUES (?,?,?,?)'

    db.query(query, [newLine.poNo, newLine.partNo, newLine.qty, newLine.priceOrdered], (err, res) => {
        if(err) {
            send(err, null);
            return;
        }
        send(null, res);
    });
};

Line.list = (poNo, send) => {
    let query = 'SELECT * FROM Lines024 WHERE poNo024 = ?';

    db.query(query, [poNo], (err, res) => {
        if(err) {
            send(err, null);
            return;
        }
        send(null, res);
    });
};
