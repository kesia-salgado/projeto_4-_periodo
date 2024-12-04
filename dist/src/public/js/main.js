"use strict";
<<<<<<< HEAD
=======
// Seleção dos elementos
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const loginButton = document.getElementById('login-btn');
const learnMoreButton = document.getElementById('learn-more-btn');
// Função para busca
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Você pesquisou por: ${query}`);
        // Aqui pode redirecionar ou executar lógica de busca
    }
    else {
        alert('Por favor, insira um termo para buscar.');
    }
});
// Função para login
loginButton.addEventListener('click', () => {
    window.location.href = '/login'; // Redireciona para a página de login
});
// Função para "Saber Mais"
learnMoreButton.addEventListener('click', () => {
    alert('Saiba mais sobre nossos destinos incríveis!');
});
>>>>>>> dd38d66 (Adicionando novas funcionalidades, responsividade e documentação do projeto)
