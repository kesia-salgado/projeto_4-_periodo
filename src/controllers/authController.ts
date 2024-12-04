<<<<<<< HEAD
import { UserModel } from '../models/userModel';

export class AuthController {
    private userModel = new UserModel();

    public login(usuario: string, email: string, senha: string): boolean {
        return this.userModel.authenticate(email, senha);
=======
import { User } from "../models/userModel";

export class AuthController {
    static login(): void {
        const username = prompt("Digite seu nome de usuário:");
        const email = prompt("Digite seu e-mail:");
        const password = prompt("Digite sua senha:");

        if (username && email && password) {
            const user = new User(username, email, password);
            alert(`Bem-vindo, ${user.username}!`);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
>>>>>>> dd38d66 (Adicionando novas funcionalidades, responsividade e documentação do projeto)
    }
}
