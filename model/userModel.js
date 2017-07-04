var Sequelize = require("sequelize");
var Db = require("./baseDb.js");
var User = Db.define("Mz_blog", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        unipue: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    username: {
        allowNull: false,
        type: Sequelize.STRING
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING
    },
    nickname: {
        allowNull: false,
        type: Sequelize.STRING
    }
});
module.exports = User;