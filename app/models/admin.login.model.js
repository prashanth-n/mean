var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    usrPassword: { type: String },
    firstName: String,
    lastName: String
});
var User = mongoose.model('testUser',userSchema)
module.exports = User;