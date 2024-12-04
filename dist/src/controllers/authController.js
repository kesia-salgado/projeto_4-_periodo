"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const userModel_1 = require("../models/userModel");
class AuthController {
<<<<<<< HEAD
    constructor() {
        this.userModel = new userModel_1.UserModel();
    }
    login(usuario, email, senha) {
        return this.userModel.authenticate(email, senha);
=======
    static login() {
        const username = prompt("Digite seu nome de usuário:");
        const email = prompt("Digite seu e-mail:");
        const password = prompt("Digite sua senha:");
        if (username && email && password) {
            const user = new userModel_1.User(username, email, password);
            alert(`Bem-vindo, ${user.username}!`);
        }
        else {
            alert("Por favor, preencha todos os campos.");
        }
>>>>>>> dd38d66 (Adicionando novas funcionalidades, responsividade e documentação do projeto)
    }
}
exports.AuthController = AuthController;
