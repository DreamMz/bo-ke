var md5 = require("blueimp-md5");
var common = require("../common.js");
var UserModel = require("../model/userModel.js")


module.exports = {
    getRegisterPage(req, res) {
        res.render("./user/register")
    },
    getLoginPage(req, res) {
        res.render("./user/login")
    },
    addregister(req, res) {
        var newuser = req.body;
        UserModel.sync()
            .then(() => {
                return UserModel.count({
                    where: {
                        username: newuser.username
                    }
                })
            })
            .then((count) => {
                if (count === 0) {
                    newuser.password = md5(newuser.password, common.pwdSalt);
                    return UserModel.create(newuser);
                }
                return null;
            })
            .then((result) => {
                if (result === null) {
                    res.json({
                        err_code: 1,
                        msg: "此用户已被注册 请重新注册"
                    })
                } else {
                    res.json({
                        err_code: 0
                    })
                }
            })
    },
    login(req, res) {
        var loginInfo = req.body;
        loginInfo.password = md5(loginInfo.password, common.pwdSalt)
        UserModel.sync()
            .then(() => {
                return UserModel.findOne({
                    where: {
                        username: loginInfo.username,
                        password: loginInfo.password
                    }
                })
            })
            .then((result) => {
                if (result === null) {
                    res.json({
                        err_code: 1,
                        msg: '用户名或密码错误'
                    })
                } else {
                    req.session.islogin = true;
                    req.session.user = result;
                    // console.log(req.session);
                    res.json({
                        err_code: 0,
                    })
                }
            })
    },
    loginout(req, res) {
        req.session.destroy((err) => {
            if (err) throw err;
            res.redirect("/");
        })
    }
}