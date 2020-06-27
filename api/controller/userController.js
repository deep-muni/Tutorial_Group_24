const userModel = require("../model/users");

const getAllUsers = (req, res) => {
    userModel.find().exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const searchUser = (req, res) => {
    userModel.find({bid: req.params.bid}).exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const addUser = (req, res) => {

}

const modifyUser = (req, res) => {

}


module.exports.getAllUsers = getAllUsers;
module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.modifyUser = modifyUser;
