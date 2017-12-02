var mongoose = require('mongoose');
var adminAct = require('../models/admin.login.model');
console.log('entering add device api')
exports.addDevice = function(req, res){

    var deviceName = req.body.deviceName;
    var ownedBy = req.body.ownedBy;
    var purchasePrice = req.body.purchasePrice;
    var repairPrice = req.body.repairPrice;
    var newDevice = new adminAct()
    newDevice.deviceName = deviceName;
    newDevice.ownedBy = ownedBy;
    newDevice.purchasePrice = purchasePrice;
    newDevice.repairPrice = repairPrice;
    newDevice.save(function(err,device){
        if(err){
            return res.status(400).send({message:"something went wronf"})
        }
        return res.status(200).send(device);
    })
}