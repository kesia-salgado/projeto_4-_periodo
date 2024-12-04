import { renderHero, renderGallery } from "../views/viewHelp";

export class PageController {
    static loadHeroSection(): void {
        const heroSection = document.getElementById('hero')!;
        heroSection.innerHTML = renderHero();
        const learnMoreBtn = document.getElementById('learn-more-btn')!;
        learnMoreBtn.addEventListener('click', () => alert('Mais informações em breve!'));
    }

    static loadGallerySection(): void {
        const gallerySection = document.getElementById('gallery')!;
        gallerySection.innerHTML = renderGallery();
    }
}
