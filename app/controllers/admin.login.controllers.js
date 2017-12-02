var mongoose = require('mongoose');
var User = require('../models/admin.login.model');
exports.adminLogin = function (req, res) {
    console.log('login req', req.body);
    var userName = req.body.userName;
    var usrPassword = req.body.userPassword;
    User.findOne({ userName: userName }, function (err, user) {
        console.log(user)
        if (err) {
            console.log(err);
            return res.status(500).send()
        }
        if (user) {
            if (user.usrPassword !== usrPassword) {
                return res.status(401).send('Password Incorrect');
            }
        } else {
            return res.send(404).send('not found')
        }
        return res.status(200).send(user)
    })
}
exports.adminRegister = function (req, res) {
    var userName = req.body.userName;
    var usrPassword = req.body.userPassword;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var newUser = new User();
    newUser.userName = userName;
    newUser.usrPassword = usrPassword;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.save(function (err, saveUser) {
        if (err) {
            console.log(err);
            return res.status(400).send()
        } else {
            return res.status(200).send()
        }

    })

}