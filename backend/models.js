const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    surname: String,
    mail: String,
    password: String,
    gender: String,
    forename: String
});

const User = mongoose.model('user', userSchema);

module.exports = {
    User
};