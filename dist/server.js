"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("./src/controllers/authController");
const mainController_1 = require("./src/controllers/mainController");
const app = (0, express_1.default)();
const authController = new authController_1.AuthController();
const mainController = new mainController_1.MainController();
app.use(express_1.default.static('src/public'));
app.get('/', (req, res) => res.sendFile(mainController.renderPage('home')));
app.get('/login', (req, res) => res.sendFile(mainController.renderPage('login')));
app.post('/login', (req, res) => {
    const { usuario, email, senha } = req.body;
    const isAuthenticated = authController.login(usuario, email, senha);
    if (isAuthenticated)
        res.redirect('/dashboard');
    else
        res.send('Login inválido!');
});
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
