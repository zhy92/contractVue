const express = require('express');
var bodyParser = require('body-parser'); //body-parser中间件来解析请求体
const app = express();

//跨域访问
// app.all('*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://10.1.3.221:8020');
//     res.header('Access-Control-Allow-Headers', 'Content-Type: application/json; charset=utf-8');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
// });

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //自定义中间件，设置跨域需要的响应头。
    next();
};

var userInfo = require('./json/getUserInfo.json');
var userInfoPost = require('./json/userInfo.json');
var tablelists = require('./json/tablelists.json');
var pageInfo = require('./json/pageInfo.json');
var tableData = require('./json/tableData.json');

var apiRoutes = express.Router();
app.use(allowCrossDomain); //运用跨域的中间件
app.use(bodyParser.text()); //运用中间件，对请求体的文本进行解析
app.use('/api', apiRoutes);
module.exports = {
    publicPath: '/xxcontract',
    outputDir: 'dist',
    devServer: {
        port: 1000,
        open: true,
        before: function(app) {
            app.get('/api/getUserInfo', function(req, res) {
                res.json({ code: 0, data: userInfo });
            });
            app.post('/api/userInfoPost', function(req, res) {
                res.json({ code: 0, data: userInfoPost });
            });
            app.post('/api/tablelists', function(req, res) {
                res.json({ code: 0, data: tablelists });
            });
            app.post('/api/pageInfo', function(req, res) {
                res.json({ code: 0, data: pageInfo });
            });
            app.post('/api/tableData', function(req, res) {
                res.json({ code: 0, data: tableData });
            });
            app.get('/api/tableDatalist', function(req, res) {
                res.json({ code: 0, data: tableData });
            });
        }
    }
}