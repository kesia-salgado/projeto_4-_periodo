"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pageControllers_1 = require("./controllers/pageControllers");
const authController_1 = require("./controllers/authController");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
document.addEventListener("DOMContentLoaded", () => {
    // Carrega seções
    pageControllers_1.PageController.loadHeroSection();
    pageControllers_1.PageController.loadGallerySection();
    // Adiciona evento de login
    const loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", authController_1.AuthController.login);
});
const app = (0, express_1.default)();
// Servir arquivos estáticos da pasta public
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
// Configuração adicional de rotas
// ...
exports.default = app;
