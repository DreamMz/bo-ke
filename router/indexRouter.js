var express = require("express");
var router = express.Router();


var indexCtrl = require("../controller/indexCtrl.js")
router.get("/", indexCtrl.showIndex)





module.exports = router;