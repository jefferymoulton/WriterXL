var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var salt = bcrypt.genSaltSync();

var UserSchema = new mongoose.Schema({
    email:              { type: String, index: { unique: true } },
    firstName:          String,
    lastName:           String,
    hashedPassword:     String,
    isActive:           Boolean,
    dateCreated:        Date
});

UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.hashedPassword = bcrypt.hashSync(password, salt);
    })
    .get(function() { return this._password });

module.exports = mongoose.model('User', UserSchema);