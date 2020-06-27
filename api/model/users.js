const mongoose = require('mongoose');

const users = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    bid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
});

module.exports = mongoose.model("users", users);
