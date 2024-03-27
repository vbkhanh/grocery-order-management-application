
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const partControllers = require('./controllers/Part.controller');
const poControllers = require('./controllers/PO.controller');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Grocery ORDER Management Application." });
});


app.get('/listParts', partControllers.listParts);

app.post('/createPart', partControllers.createPart);

app.get('/listPOs/:clientID', poControllers.listPOs);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});