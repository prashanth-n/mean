module.exports = function (app) {
   var login = require('../controllers/admin.login.controllers')
   app.route('/login')
	   .post(login.adminLogin)
	app.route('/register')
		.post(login.adminRegister)
}	