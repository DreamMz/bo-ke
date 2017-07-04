var Sequelize = require("sequelize");
var connection = new Sequelize("dream_mz", "root", "root", {
    host: "127.0.0.1",
    dialect: 'mysql'
})
module.exports = connection;