import express from 'express';
import { AuthController } from './src/controllers/authController';
import { MainController } from './src/controllers/mainController';

const app = express();
const authController = new AuthController();
const mainController = new MainController();

app.use(express.static('src/public'));

app.get('/', (req, res) => res.sendFile(mainController.renderPage('home')));
app.get('/login', (req, res) => res.sendFile(mainController.renderPage('login')));

app.post('/login', (req, res) => {
    const { usuario, email, senha } = req.body;
    const isAuthenticated = authController.login(usuario, email, senha);
    if (isAuthenticated) res.redirect('/dashboard');
    else res.send('Login inválido!');
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
