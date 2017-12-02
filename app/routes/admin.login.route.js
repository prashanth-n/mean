module.exports = function (app) {
	console.log('routes loaded');
	var login = require('../controllers/admin.login.controllers');
	var adminAction = require('../controllers/admin.action.controller');
	app.route('/login')
		.post(login.adminLogin)
	app.route('/register')
		.post(login.adminRegister)
	 app.route('/addDevice')
	 	.post(adminAction.addDevice)
}	