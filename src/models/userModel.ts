export interface User {
    usuario: string;
    email: string;
    senha: string;
}
<<<<<<< HEAD
=======
export class User {
    constructor(public username: string, public email: string, public password: string) {}
}
>>>>>>> dd38d66 (Adicionando novas funcionalidades, responsividade e documentação do projeto)

export class UserModel {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public authenticate(email: string, senha: string): boolean {
        return this.users.some((user) => user.email === email && user.senha === senha);
    }
}
<<<<<<< HEAD
=======

>>>>>>> dd38d66 (Adicionando novas funcionalidades, responsividade e documentação do projeto)
