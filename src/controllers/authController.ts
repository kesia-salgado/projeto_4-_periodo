import { UserModel } from '../models/userModel';

export class AuthController {
    private userModel = new UserModel();

    public login(usuario: string, email: string, senha: string): boolean {
        return this.userModel.authenticate(email, senha);
    }
}
