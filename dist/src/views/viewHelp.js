"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderGallery = exports.renderHero = void 0;
function renderHero() {
    return `
        <img src="./assets/hero.jpg" alt="Hero Image">
        <div class="hero-text">
            <h1>Vamos explorar o mundo conosco</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button id="learn-more-btn">Saber mais</button>
        </div>`;
}
exports.renderHero = renderHero;
function renderGallery() {
    return `
        <img src="./assets/image1.jpg" alt="Imagem 1">
        <img src="./assets/image2.jpg" alt="Imagem 2">
        <img src="./assets/image3.jpg" alt="Imagem 3">`;
}
exports.renderGallery = renderGallery;
