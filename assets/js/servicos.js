const liElements = document.querySelectorAll('li[class^="servico"]');

liElements.forEach((liElement) => {
    const imgMais = liElement.querySelector('.img-mais');
    const descricaoTotal = liElement.querySelector('.descricao-total');

    liElement.addEventListener('click', () => {
        if (descricaoTotal.style.maxHeight === '0px' || descricaoTotal.style.maxHeight === '') {
            // Calcular a altura da descrição com seu conteúdo real
            const alturaDescricao = descricaoTotal.scrollHeight + 'px';
            descricaoTotal.style.maxHeight = alturaDescricao;
            imgMais.classList.add('ativado');
            imgMais.classList.remove('desativado');
        } else {
            descricaoTotal.style.maxHeight = '0px';
            imgMais.classList.remove('ativado');
            imgMais.classList.add('desativado');
        }
    });
});
