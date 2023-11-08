const express = require('express');
const {status, json} = require("express/lib/response");
const ObjectID = require('mongodb').ObjectID;

const newRouter = function (collection) {
    const router = express.Router();

    const errorCatcher = function(inputError){
        console.error(inputError);
        status(500);
        json({ status: 500, error: inputError })
    }

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => errorCatcher(err));
    });

    router.post('/', (req,res) => {
        const newData = req.body;
        collection
            .insertOne(newData)
            .then((result) => {
                res.json(result[0])
            })
            .catch((err) => errorCatcher(err));
    });

    return router;
};

module.exports = newRouter;
