var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    password: {type: String},
    email: {type: String}
});
var Employee = mongoose.model('employee', employeeSchema);
module.exports = Employee;