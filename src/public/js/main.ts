// Seleção dos elementos
const searchInput = document.getElementById('search') as HTMLInputElement;
const searchButton = document.getElementById('search-btn') as HTMLButtonElement;
const loginButton = document.getElementById('login-btn') as HTMLButtonElement;
const learnMoreButton = document.getElementById('learn-more-btn') as HTMLButtonElement;

// Função para busca
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Você pesquisou por: ${query}`);
    // Aqui pode redirecionar ou executar lógica de busca
  } else {
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
