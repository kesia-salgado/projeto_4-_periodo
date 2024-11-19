"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const userModel_1 = require("../models/userModel");
class AuthController {
    constructor() {
        this.userModel = new userModel_1.UserModel();
    }
    login(usuario, email, senha) {
        return this.userModel.authenticate(email, senha);
    }
}
exports.AuthController = AuthController;
