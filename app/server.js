
const express = require('express');


const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();
const sql = require("./models/db");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Grocery ORDER Management Application." });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});