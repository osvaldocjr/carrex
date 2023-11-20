document.addEventListener('DOMContentLoaded', function () {
  const ladoEsquerdoInicio = document.querySelector('.lado-esquerdo-inicio');
  const ladoDireitoInicio = document.querySelector('.lado-direito-inicio');
  const hamburguer = document.querySelector('.hamburguer');
  const navMenu = document.querySelector('.nav-menu');

  const isScrolledIntoView = function (element) {
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;
      return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  const animateImages = function () {
      const ladoEsquerdoInicioAnimate = document.querySelectorAll('.animate');

      if (isScrolledIntoView(ladoEsquerdoInicio)) {
          ladoEsquerdoInicio.classList.add('animate');
      } else {
          ladoEsquerdoInicio.classList.remove('animate');
      }

      if (isScrolledIntoView(ladoDireitoInicio)) {
          ladoDireitoInicio.classList.add('animate-right');
      } else {
          ladoDireitoInicio.classList.remove('animate-right');
      }

      const isMenuAtivado = hamburguer.classList.contains('menu-ativado') && navMenu.classList.contains('menu-ativado');

      ladoEsquerdoInicioAnimate.forEach((element) => {
          element.style.display = isMenuAtivado ? 'none' : 'flex';
          ladoEsquerdoInicio.classList.add('animate');
      });
  };

  animateImages();

  window.addEventListener('scroll', function () {
      animateImages();
  });

  const navLinks = document.querySelectorAll('.nav-link');

  const hideNavMenu = function () {
      hamburguer.classList.remove('menu-ativado');
      navMenu.classList.remove('menu-ativado');
      animateImages();
  };

  const handleNavLinkClick = function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      hideNavMenu();
  };

  navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
  });

  hamburguer.addEventListener('click', () => {
      hamburguer.classList.toggle('menu-ativado');
      navMenu.classList.toggle('menu-ativado');
      animateImages();
  });
});
