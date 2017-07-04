var express = require("express");
var router = express.Router();
var useCtrl = require("../controller/userCtrl.js");

router
    .get("/register", useCtrl.getRegisterPage)
    .get("/login", useCtrl.getLoginPage)
    .post("/register", useCtrl.addregister)
    .post("/login", useCtrl.login)
    .get("/loginout", useCtrl.loginout)
module.exports = router;