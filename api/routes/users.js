const express = require('express');
const router = express.Router();
const method = require('../controller/userController');

router.get('/', method.getAllUsers);

router.get('/specUser/:bid', method.searchUser);

router.post('/addUser', method.addUser);

router.put('/modifyUser', method.modifyUser);

module.exports = router;
