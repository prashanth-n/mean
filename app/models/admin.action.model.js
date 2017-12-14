var mongoose = require('mongoose');
var adminActionSchema = new mongoose.Schema({
    deviceName: { type: String, unique: true },
    ownedBy: { type: String },
    purchasePrice: { type: Number },
    repairPrice: { type: Number }
});
var adminAct = mongoose.model('adminaction', adminActionSchema)
module.exports = adminAct;