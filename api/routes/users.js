const express = require('express');
const router = express.Router();
const userList = require('../model/users');

const method = require('../controller/userController');

router.get('/', function (req, res) {
    res.json(userList);
});

router.get('/specUser/:bid', function (req, res) {
    res.json(method.searchUser("bid", req.params.bid));
})

router.post('/addUser', function (req, res) {
    res.json(method.addUser(req.body));
});

router.put('/modifyUser', function (req, res) {
    res.json(method.modifyUser(req.body));
});

module.exports = router;
