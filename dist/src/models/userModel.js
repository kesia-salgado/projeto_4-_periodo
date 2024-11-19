"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
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
