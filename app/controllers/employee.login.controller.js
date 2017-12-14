// var mongoose = require('mongoose');
var Employee = require('../models/employee.model');
exports.employeeLogin = function(req,res){

};
exports.employeeSignUp = function(req,res){

    var empEmail = req.body.employeeEmailId;
    var empPassword = req.body.employeePassword;
    var empFName = req.body.employeeFirstName;
    var empLName = req.body.employeeLastName;
    var emp = new Employee();

    emp.email = empEmail;
    emp.firstName = empFName;
    emp.lastName = empLName;
    emp.password = empPassword;
    emp.save(function (err, emp) {
        if(err){
            return res.status(500).send({
                'message':'Something went wrong'
            });
        }
        return res.status(200).send({
            'message':'Employee added successfully',
            'employee':emp
        });
    })

};