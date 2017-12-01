module.exports = function (app) {
	var login = require('../controllers/admin.login.controllers');
	var adminAction = require('../controllers/admin.action.controller');
	app.route('/login')
		.post(login.adminLogin)
	app.route('/register')
		.post(login.adminRegister)
	app.route('/add')
		.post(adminAction.addDevice)
}	