var express = require("express");

var app = express();


var path = require("path");
var fs = require("fs");
// 导入并注册表单中间件
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// 挂载静态资源
app.use("/node_modules", express.static("node_modules"));
// 设置模板
app.set("view engine", "ejs");
// 设置模板存放路径
app.set("views", "./views");

// 注册路由模块

fs.readdir(path.join(__dirname, "./router"), (err, fileNames) => {
    if (err) return err;
    console.log(fileNames);
    fileNames.forEach(fileName => {
        var routerPath = path.join(__dirname, "./router", fileName)
        var routerModule = require(routerPath);
        app.use(routerModule);
    })

});
// fs.readdir(path.join(__dirname, './router'), (err, filenames) => {
//     if (err) throw err;
//     filenames.forEach(filename => {
//         // 这个 routerPath 就是每个 路由模块 对应的 require 时候的 path
//         var routerPath = path.join(__dirname, './router', filename);
//         // 根据每个路由模块的路径，自动 require 路由模块
//         var routerModule = require(routerPath);
//         // 根据自动 require 进来的路由模块,自动去注册这个路由模块
//         app.use(routerModule);
//     });
// });

var session = require("express-session");
app.use(session({
    secret: "31fdafdfa!@#$%^*:",
    resave: false,
    saveUninitialized: true

}))




// 监听
app.listen(3000, () => {
    console.log("http://127.0.0.1:3000")
})