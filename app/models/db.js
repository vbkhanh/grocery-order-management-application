
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.HOST,  
    user: process.env.USER,             
    password:  process.env.PASSWORD,           
    database: process.env.DB
});

db.connect((error) => {
    if(error) {
        console.log(process.env.USER);
        throw error;
    }
    console.log(typeof(process.env.USER));
    console.log("Successfully connected to the database");
});

module.exports = db;

