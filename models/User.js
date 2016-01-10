var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email:              { type: String, index: { unique: true } },
    first_name:         String,
    last_name:          String,
    password:           String,
    token:              String
});

module.exports = mongoose.model('User', UserSchema);