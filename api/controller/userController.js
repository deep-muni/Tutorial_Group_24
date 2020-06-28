const userModel = require("../model/users");

const getAllUsers = (req, res) => {
    userModel.find().exec()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const searchUser = (req, res) => {
    userModel.find({ bid: req.params.bid }).exec()
        .then(data => {
            console.log(data)
            res.json(data);

        })
        .catch(err => {
            console.log("Failure:" + err);
        })
}

const addUser = (req, res) => {
    userModel.find({ bid: req.body.bid }).exec()
        .then(result => {
            if(result.length > 0){
                res.json({message: "User already exist"});
            }else{
                userModel.insert({bid: req.body.bid, name: req.body.name, email: req.body.email}).exec()
                    .then(data => {
                        res.json({message: "User Added"});
                    })
                    .catch(err => {
                        console.log("Failure in adding the data:" + err);
                    })
            }
        })
        .catch(err => {
            console.log("Failure in fetching the data:" + err);
        })
}

const modifyUser = (req, res) => {
    userModel.find({ bid: req.params.bid }).exec()
        .then(result => {
            if(result.length === 0){
                res.json({message: "User does not exist"});
            }else{
                userModel.updateOne({ name: req.body.name, email: req.body.email }).exec()
                    .then(data => {
                        res.json({message: "User modified"});
                    })
                    .catch(err => {
                        console.log("Failure in modifying the data:" + err);
                    })
            }
        })
        .catch(err => {
            console.log("Failure in fetching the data:" + err);
        })
}


module.exports.getAllUsers = getAllUsers;
module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.modifyUser = modifyUser;
