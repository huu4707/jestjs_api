const {User}  = require('../models/user');

function create(body) {
    const user = new User(body);
    return user.save();
}

module.exports = {
    create
}