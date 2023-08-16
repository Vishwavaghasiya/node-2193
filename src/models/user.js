/*-----
    user.model
-------*/
//require mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Boolean,
        default: true,
    },
});

const User = module.exports = mongoose.model('user', userSchema);

module.exports = User;