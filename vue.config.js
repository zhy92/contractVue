const express = require('express');
const app = express();

var userInfo = require('./json/getUserInfo.json');
var userInfoPost = require('./json/userInfo.json');
var tablelists = require('./json/tablelists.json');
var pageInfo = require('./json/pageInfo.json');

var apiRoutes = express.Router();
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
        }
    }
}