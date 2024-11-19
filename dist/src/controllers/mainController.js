"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
class MainController {
    renderPage(page) {
        switch (page) {
            case 'login':
                return '/views/login.html';
            case 'home':
            default:
                return '/views/home.html';
        }
    }
}
exports.MainController = MainController;
