const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const newRouter = require('./router.js');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('ToddlerWorld');
        const collection = db.collection('admin');
        const router = newRouter(collection);

        app.use('/', router);
    }).catch(console.err);

app.listen(4000, function () {
    console.log(`Listening on this port: ${this.address().port}`);
});