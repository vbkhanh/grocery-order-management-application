
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const partController = require('./controllers/Part.controller');
const poController = require('./controllers/PO.controller');
const lineController = require('./controllers/Line.controller');

const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const tryCatch = require('./utils/tryCatch');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Grocery ORDER Management Application." });
});


app.get('/listParts', tryCatch(partController.listParts));

app.post('/createPart', tryCatch(partController.createPart));

app.get('/listPOs/:clientID', tryCatch(poController.listPOs));

app.get('/listLines/:poNo', tryCatch(lineController.listLines));

app.use(errorHandler);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});