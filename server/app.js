const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const newRouter = require('./router.js');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('Malle-Maenz-db');
        const staffCollection = db.collection('details');
        const staffRouter = newRouter(staffCollection);

        app.use('/api/details', staffRouter);
    })
    .catch(console.err);

app.listen(4000, function () {
    console.log(`Listening on this port: ${this.address().port}`);
});