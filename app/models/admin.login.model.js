var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    usrPassword: { type: String },
    firstName: String,
    lastName: String
})
var User = mongoose.model('testUser',userSchema)
module.exports = User

var adminActionSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    deviceName: { type: String, unique: true },
    ownedBy: { type: String },
    purchasePrice: { type: Number },
    repairPrice: { type: Number }
})
var adminAct = mongoose.model('adminaction', adminActionSchema)
module.exports = adminAct