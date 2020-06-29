const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./api/routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(__dirname + '/reactapp/build/'));

app.get('/*',function(req,res, next){
    res.sendFile(path.join(__dirname + '/reactapp/build/index.html'));
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/user', router);

app.listen(process.env.PORT || 5000, function () {
    console.log('started');
});
