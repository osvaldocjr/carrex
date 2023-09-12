const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const menuItems = navMenu.querySelectorAll(".nav-link"); // Seletor para os links do menu

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('menu-ativado');
    navMenu.classList.toggle('menu-ativado');
});

// Adicionar evento de clique para cada item do menu
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        // Ocultar o menu após clicar em um item do menu
        hamburguer.classList.remove('menu-ativado');
        navMenu.classList.remove('menu-ativado');
    });
});
