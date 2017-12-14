module.exports = function (app) {
    console.log('routes loaded');
    var login = require('../controllers/admin.login.controllers');
    var adminAction = require('../controllers/admin.action.controller');
    var employeeAction = require('../controllers/employee.login.controller');
    app.route('/login')
        .post(login.adminLogin);
    app.route('/register')
        .post(login.adminRegister);
    app.route('/addDevice')
        .post(adminAction.addDevice);
    app.route('/getAllDevices')
        .post(adminAction.getAllDevice);
    app.route('/getDeviceById')
        .post(adminAction.getDeviceById);
    app.route('/updateDeviceDetails')
        .post(adminAction.updateDeviceDetails);
    app.route('/employeeLogin')
        .post(employeeAction.employeeLogin);
    app.route('/employeeSignUp')
        .post(employeeAction.employeeSignUp);
};