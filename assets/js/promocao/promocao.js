import { listaPromocao } from "../../services/promocao-services.js";

export const novaPergunta = (promocao) => {
    const cardPergunta = document.createElement("li");
    cardPergunta.classList.add("exibir-promocao");
    const conteudo = `
        <div class="questoes-div">
            <span class="span-promocao">Pergunta: <span class="resposta-questionario" id="pergunta-${promocao.id}">${promocao.pergunta}</span></span>
            <span class="span-promocao">Resposta <span class="resposta-verde">Correta</span>: <span class="resposta-questionario" id="correta-${promocao.id}">${promocao.correct}</span></span>
            <span class="span-promocao">Resposta <span class="resposta-vermelha">Errada</span>: <span class="resposta-questionario" id="errada-${promocao.id}">${promocao.incorrect}</span></span>
        </div>
        <div class="botoes-questoes-dois">
            <button class="botao-editar" data-promocao-id="${promocao.id}">Editar pergunta</button>
            <button class="botao-salvar" data-promocao-id="${promocao.id}" style="display: none;">Salvar pergunta</button>
            <button class="botao-deletar" data-promocao-id="${promocao.id}">Remover pergunta</button>
        </div>
    `;

    cardPergunta.innerHTML = conteudo;

    return cardPergunta;
}