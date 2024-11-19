export interface User {
    usuario: string;
    email: string;
    senha: string;
}

export class UserModel {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public authenticate(email: string, senha: string): boolean {
        return this.users.some((user) => user.email === email && user.senha === senha);
    }
}
