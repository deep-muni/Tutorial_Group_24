const userList = require('../model/users');

const searchUser = (key, value) => {
    return userList.find(user => {
        return user[key] === value;
    });
}

const addUser = (value) => {
    const user = searchUser('bid', value.bid);
    if(user){
        return {status: false, message: 'User already exist'};
    }else{
        userList.push(value);
        return {status: true, message: 'User is added to the list'};
    }
}

const modifyUser = (value) => {
    const user = searchUser('bid', value.bid);
    if(user){
        user.name = value.name;
        user.email = value.email;
        return {status: true, message: 'User Data is Modified'};
    }else{
        return {status: false, message: 'User does not exist'};
    }
}

module.exports.searchUser = searchUser;
module.exports.addUser = addUser;
module.exports.modifyUser = modifyUser;
