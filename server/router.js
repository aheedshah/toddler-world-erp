const express = require('express');
const {status, json} = require("express/lib/response");

const newRouter = function (collection) {
    const router = express.Router();
    router.use(express.json());
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

    router.post("/login", (req, res) => {
        console.log(req.body);
        const loginData = req.body;
        // console.log(loginData);

        collection
            .findOne({ username: loginData.username, password: loginData.password })
            .then((result) => {
                console.log(result);
                if(result !== null) {
                    res.send('Welcome');
                } else {
                    res.send('Wrong Username or password');
                }
            });
    });

    return router;
};

module.exports = newRouter;
