"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.UserModel = void 0;
=======
exports.UserModel = exports.User = void 0;
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
exports.User = User;
>>>>>>> dd38d66 (Adicionando novas funcionalidades, responsividade e documentação do projeto)
class UserModel {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    authenticate(email, senha) {
        return this.users.some((user) => user.email === email && user.senha === senha);
    }
}
exports.UserModel = UserModel;
