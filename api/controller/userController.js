const userModel = require("../model/users");

const getAllUsers = (req, res) => {
    userModel.find().exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const searchUser = (req, res) => {
    userModel.find({ bid: req.params.bid }).exec()
        .then(data => {
            res.json({ Status :"Success", data : data});
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const addUser = (req, res) => {
    userModel.find({ bid: req.body.bid }).exec()
        .then(result => {
            if (result.length > 0) {
                res.json({ Status:"Success", message: "The user already exist" });
            } else {
                const newUser = new userModel({bid: req.body.bid, name: req.body.name, email: req.body.email })
                newUser.save()
                    .then(data => {
                        res.json({  Status:"Success", message: "User Added" });
                    })
                    .catch(err => {
                        res.json({Status:"Failure", message: err});
                        console.log("Error while adding the data:" + err);
                    })
            }
        })
        .catch(err => {
            console.log("Error fetching the data:" + err);
        })
}

const modifyUser = (req, res) => {
    userModel.find({ bid: req.params.bid }).exec()
        .then(result => {
            if (result.length === 0) {
                res.json({Status:"Success", message: "The user does not exist in the database" });
            } else {
                userModel.updateOne({ bid: req.params.bid }, { $set: { name: req.body.name, email: req.body.email }}).exec()
                    .then(data => {
                        res.json({Status:"Success", message: "User modified" });
                    })
                    .catch(err => {
                        console.log("Failure in modifying the data:" + err);
                    })
            }
        })
        .catch(err => {
            console.log("Error in fetching the data:" + err);
        })
}

module.exports.getAllUsers = getAllUsers;
module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.modifyUser = modifyUser;
