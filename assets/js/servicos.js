const servicos = document.querySelectorAll('.lista-servico li');
const descricaoServicos = document.querySelector('.descricao-servicos');
const descricaoPadrao = '<p>Escolha uma opção acima para ler a descrição</p>';
const sobreServicos = [
    `<p>A lavagem de veículo é um processo minucioso e cuidadoso que visa garantir a limpeza e conservação do automóvel. Nossos profissionais altamente treinados executam esse serviço com total dedicação e atenção aos detalhes. <br><br>Para começar, utilizamos um pincel específico para limpar minuciosamente as letras e locais de difícil acesso, onde a luva de microfibra não consegue alcançar. Em seguida, empregamos uma esponja especialmente projetada para remover com eficiência os insetos e sujeiras mais persistentes, garantindo uma limpeza completa. <br><br>Cuidamos também de áreas muitas vezes negligenciadas, como a caixa de ar do carro e o interior dos aros, garantindo que toda a superfície do veículo esteja impecável. <br><br>Para evitar qualquer possibilidade de danificar a pintura ou a lataria, utilizamos panos específicos e de alta qualidade durante o processo de secagem. Além disso, em locais de difícil acesso, onde o pano não alcança, empregamos um compressor de ar para assegurar que cada parte do veículo esteja completamente seca. <br><br>A preocupação com a limpeza interna do veículo também é primordial. Nossos profissionais passam o aspirador em todo o interior, removendo poeira, sujeira e resíduos. Além disso, aplicamos produtos especialmente formulados para devolver o aspecto de novo e proteger os plásticos internos.<br><br> A limpeza dos vidros é feita com extrema atenção, garantindo uma visão clara e segura para o condutor. Utilizamos produtos específicos para não manchar películas, evitando manchas e marcas nos vidros. <br><br>Em resumo, nossa lavação de veículo é um serviço completo e detalhado, que vai muito além de uma simples lavagem. Buscamos sempre a excelência em cada etapa, proporcionando aos nossos clientes um carro impecavelmente limpo e protegido. Conte conosco para cuidar do seu veículo com o máximo de carinho e profissionalismo.</p>`,
    '<p>Descrição do Serviço 2</p>',
    '<p>Descrição do Serviço 3</p>',
    '<div class="polimento-descricao"><div><h3>Polimento Automotivo: Renove o Brilho e a Elegância do Seu Veículo</h3> <p>Apresentamos a você o segredo para realçar a beleza do seu veículo e devolver-lhe o brilho original que merece - nosso serviço profissional de polimento automotivo. Seja um carro novo ou um clássico de estimação, nosso processo de polimento especializado é projetado para trazer de volta o esplendor da pintura, deixando uma impressão duradoura por onde quer que você vá.</p> </div><div><h3>Por que Escolher o Polimento Automotivo?</h3> <p>Com o tempo, fatores ambientais, desgaste diário e exposição ao sol podem afetar a aparência da pintura do seu carro. Riscos superficiais, manchas de água e imperfeições diminuem o brilho e a qualidade da pintura. Nosso serviço de polimento cuidadoso e técnico é uma maneira eficaz de revitalizar a aparência do seu veículo e proteger seu investimento.<p/> </div><div><h3>O que Nosso Polimento Automotivo Oferece?</h3> <p>Nossa equipe de profissionais treinados está comprometida em oferecer resultados excepcionais. Quando você escolhe nosso serviço de polimento automotivo, pode esperar:</p> <ol><li>Preparação Detalhada: Realizamos uma limpeza minuciosa para remover sujeira e detritos, preparando a superfície para o polimento.</li> <li>Remoção de Defeitos: Utilizamos técnicas de polimento avançadas para eliminar riscos, marcas de redemoinho e imperfeições superficiais.</li> <li>Brilho Profundo: Nosso processo de polimento restaura o brilho profundo da pintura, realçando a cor e a vivacidade.</li> <li>Proteção Duradoura: Aplicamos produtos de proteção de alta qualidade para ajudar a manter a aparência recém-polida por mais tempo.</li> <li>Acabamento Impecável: Cada detalhe é tratado com cuidado, resultando em um acabamento suave e uniforme.</li></ol> </div><div><h3>Benefícios do Polimento Automotivo:</h3> <ul><li>Restauração da Aparência: Transforme a aparência do seu veículo, eliminando arranhões e manchas superficiais.</li> <li>Valorização do Veículo: Um exterior polido aumenta o valor do seu veículo e atrai a atenção dos compradores em potencial.</li> <li>Proteção da Pintura: O polimento não apenas melhora a estética, mas também protege a pintura contra danos futuros.</li> <li>Experiência de Condução Aprimorada: Um carro polido reflete a luz de maneira mais uniforme, proporcionando um visual deslumbrante.</li> <li>Orgulho e Satisfação: Dirigir um veículo com pintura polida é uma fonte de orgulho e satisfação para qualquer proprietário.</li></ul></div><div><p>Eleve o visual do seu veículo a um novo patamar com nosso serviço de polimento automotivo de alta qualidade. Deixe-nos cuidar da sua pintura e revele o potencial completo da beleza do seu carro. Agende hoje mesmo e experimente a transformação que o polimento pode oferecer. Seu veículo merece o melhor, e estamos aqui para torná-lo brilhar.</p></div></div>',
    '<p>Descrição do Serviço 5</p>',
    '<p>Descrição do Serviço 6</p>'
];

let servicoSelecionado = null; 

function toggleServico(index) {
    if (servicoSelecionado !== null) {
        servicos[servicoSelecionado].classList.remove('active');
    }

    if (servicoSelecionado !== index) {
        servicos[index].classList.add('active');
        descricaoServicos.style.height = '0';
        setTimeout(() => {
            descricaoServicos.innerHTML = sobreServicos[index];
            descricaoServicos.style.height = descricaoServicos.scrollHeight + 'px';
            servicoSelecionado = index;
        }, 500);
    } else {
        descricaoServicos.style.height = '20px';
        setTimeout(() => {
            descricaoServicos.innerHTML = descricaoPadrao;
            servicoSelecionado = null;
        }, 500);
    }
}

servicos.forEach((servico, index) => {
    servico.addEventListener('click', () => {
        toggleServico(index);
    });

    servico.addEventListener('touchstart', (event) => {
        event.preventDefault();
        toggleServico(index);
    });
});
