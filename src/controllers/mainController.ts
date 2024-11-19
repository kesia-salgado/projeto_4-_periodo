export class MainController {
    public renderPage(page: string): string {
        switch (page) {
            case 'login':
                return '/views/login.html';
            case 'home':
            default:
                return '/views/home.html';
        }
    }
}
