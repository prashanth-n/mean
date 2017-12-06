var mongoose = require('mongoose');
var adminAct = require('../models/admin.action.model');
console.log('entering add device api');
exports.addDevice = function(req, res){

    var deviceName = req.body.deviceName;
    var ownedBy = req.body.ownedBy;
    var purchasePrice = req.body.purchasePrice;
    var repairPrice = req.body.repairPrice;
    var newDevice = new adminAct();
    newDevice.deviceName = deviceName;
    newDevice.ownedBy = ownedBy;
    newDevice.purchasePrice = purchasePrice;
    newDevice.repairPrice = repairPrice;
    newDevice.save(function(err,device){
        if(err){
            console.log(err);
            return res.status(400).send({message:"something went wronf"})
        }
        return res.status(200).send(device);
    })
};
exports.getAllDevice = function(req,res){
    adminAct.find().exec(function(err, devices){
        if(err){
            return res.status(500).send({
                message:'Internal server error'
            });
        } else {
            res.json(devices)
        }
        if(!devices.length){
            return res.status(400).send({
                message:'No devices found'
            });
        }

    })
};
exports.getDeviceById = function(req,res){
    var id = req.body.id;
    adminAct.findById(id,function(err, device){
        if(err){
            return res.status(400).send({
                message:'No devices found'
            });
        }
        console.log(device);
        return res.status(200).send(device);
    })
};