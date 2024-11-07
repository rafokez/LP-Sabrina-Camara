function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
  }

  document.getElementById("imageModal").addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });

  // Funcionalidade do Menu Hambúrguer com Animação
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

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