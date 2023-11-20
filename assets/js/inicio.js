document.addEventListener('DOMContentLoaded', function () {
  const ladoEsquerdoInicio = document.querySelector('.lado-esquerdo-inicio');
  const ladoDireitoInicio = document.querySelector('.lado-direito-inicio');

  const animateImages = function () {
    if (ladoEsquerdoInicio) {
      ladoEsquerdoInicio.classList.add('animate');
    } else {
      ladoEsquerdoInicio.classList.remove('animate');
    }

    if (ladoDireitoInicio) {
      ladoDireitoInicio.classList.add('animate-right');
    } else {
      ladoDireitoInicio.classList.remove('animate-right');
    }
  };

  animateImages();

  window.addEventListener('scroll', function () {
    animateImages();
  });
});