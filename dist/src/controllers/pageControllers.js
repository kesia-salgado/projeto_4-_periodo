"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const viewHelp_1 = require("../views/viewHelp");
class PageController {
    static loadHeroSection() {
        const heroSection = document.getElementById('hero');
        heroSection.innerHTML = (0, viewHelp_1.renderHero)();
        const learnMoreBtn = document.getElementById('learn-more-btn');
        learnMoreBtn.addEventListener('click', () => alert('Mais informações em breve!'));
    }
    static loadGallerySection() {
        const gallerySection = document.getElementById('gallery');
        gallerySection.innerHTML = (0, viewHelp_1.renderGallery)();
    }
}
exports.PageController = PageController;
