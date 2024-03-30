
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const partController = require('./controllers/Part.controller');
const poController = require('./controllers/PO.controller');
const lineController = require('./controllers/Line.controller');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Grocery ORDER Management Application." });
});


app.get('/listParts', partController.listParts);

app.post('/createPart', partController.createPart);

app.get('/listPOs/:clientID', poController.listPOs);

app.get('/listLines/:poNo', lineController.listLines);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});