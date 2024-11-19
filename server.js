"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authController_1 = require("./controllers/authController");
var mainController_1 = require("./controllers/mainController");
var app = (0, express_1["default"])();
var authController = new authController_1.AuthController();
var mainController = new mainController_1.MainController();
app.use(express_1["default"].static('src/public'));
app.get('/', function (req, res) { return res.sendFile(mainController.renderPage('home')); });
app.get('/login', function (req, res) { return res.sendFile(mainController.renderPage('login')); });
app.post('/login', function (req, res) {
    var _a = req.body, usuario = _a.usuario, email = _a.email, senha = _a.senha;
    var isAuthenticated = authController.login(usuario, email, senha);
    if (isAuthenticated)
        res.redirect('/dashboard');
    else
        res.send('Login inválido!');
});
app.listen(3000, function () { return console.log('Servidor rodando em http://localhost:3000'); });
