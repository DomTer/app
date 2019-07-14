const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    mail: String,
    password: String,
    gender: String,
    forename: String,
    surname: String
});

const User = mongoose.model('user', userSchema);

module.exports = {
    User
};