// adicionar-promocao.js
import { carrexPromocao } from "../../../services/promocao-services.js";
import editarPromocao from "./editar-promocao.js";
import adicionarEventoDeletar from "./deletar-promocao.js"; // Correct the import statement

const { enviarPromocao, listaPromocao } = carrexPromocao;

export const novaPromocaoLista = (promocao) => {
    const cardPromocao = document.createElement("li");
    cardPromocao.classList.add("exibir-promocao");
    const conteudo = `
        <div class="promocao-div">
            <span>Serviço: <span class="span-servico" data-promocao-id="${promocao.id}">${promocao.servico}</span></span>
            <span>Valor: <span class="span-valor" data-promocao-id="${promocao.id}">${promocao.valor}</span></span>
            <span>Quantidade de dias: <span class="span-dias" data-promocao-id="${promocao.id}">${promocao.dias}</span></span>
        </div>
        <div class="botoes-promocao-dois">
            <button class="botao-editar" data-promocao-id="${promocao.id}">Editar promoção</button>
            <button class="botao-salvar" data-promocao-id="${promocao.id}" style="display: none;">Salvar promoção</button>
            <button class="botao-deletar" data-promocao-id="${promocao.id}">Remover promoção</button>
        </div>
    `;

    cardPromocao.innerHTML = conteudo;

    // Attach event listeners
    const botaoEditar = cardPromocao.querySelector(".botao-editar");
    botaoEditar.addEventListener("click", () => editarPromocao(promocao.id));

    adicionarEventoDeletar(promocao.id); // Add delete event listener

    return cardPromocao;
};

const capturarDadosFormulario = () => {
    const form = document.getElementById("form-promocao");
    const botaoEnviar = document.getElementById("botao-enviar");

    botaoEnviar.addEventListener("click", async () => {
        const servico = form.servico.value;
        const valor = form.valor.value;
        const dias = form.dias.value;

        const novaPromocao = { servico, valor, dias };

        await carrexPromocao.enviarPromocao(novaPromocao);

        form.reset();

        atualizarListaPromocao();
    });
};

const atualizarListaPromocao = async () => {
    const lista = await listaPromocao();
    const mostraPromocao = document.querySelector(".mostra-promocao");

    mostraPromocao.innerHTML = "";

    lista.forEach((promocao) => {
        const cardPromocao = novaPromocaoLista(promocao);
        mostraPromocao.appendChild(cardPromocao);
    });
};

capturarDadosFormulario();
atualizarListaPromocao();
