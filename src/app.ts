import { PageController } from "./controllers/pageControllers";
import { AuthController } from "./controllers/authController";
import express from 'express';
import path from 'path';


document.addEventListener("DOMContentLoaded", () => {
    // Carrega seções
    PageController.loadHeroSection();
    PageController.loadGallerySection();

    // Adiciona evento de login
    const loginBtn = document.getElementById("login-btn")!;
    loginBtn.addEventListener("click", AuthController.login);
});

const app = express();

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Configuração adicional de rotas
// ...

export default app;
