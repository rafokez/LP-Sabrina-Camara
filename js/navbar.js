document.addEventListener('DOMContentLoaded', () => {
    // Função para configurar o evento do menu após carregar a navbar
    function initializeMenu() {
      const menuButton = document.getElementById('menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
  
      if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
          if (mobileMenu.classList.contains('hidden')) {
            // Remove a classe 'hidden' e aplica as classes de animação para abrir
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('opacity-0', 'translate-y-[-20px]'); // Estado inicial
  
            setTimeout(() => {
              mobileMenu.classList.remove('opacity-0', 'translate-y-[-20px]');
              mobileMenu.classList.add('opacity-100', 'translate-y-0'); // Estado final
            }, 10); // Delay curto para iniciar a animação
          } else {
            // Aplica as classes de animação para fechar
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            mobileMenu.classList.add('opacity-0', 'translate-y-[-20px]');
  
            // Espera a animação terminar antes de ocultar o menu
            setTimeout(() => {
              mobileMenu.classList.add('hidden');
            }, 300); // Duração da animação em milissegundos
          }
        });
      }
    }
  
    // Verifica se a navbar já foi carregada
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
      fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
          navbarContainer.innerHTML = data;
          initializeMenu(); // Inicializa o menu após carregar o HTML
        })
        .catch(error => console.error('Erro ao carregar a navbar:', error));
    }
  });
  