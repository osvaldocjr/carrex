import { carrexPromocao } from "../../../services/promocao-services.js";
import atualizarListaPromocao from "./adicionar-promocao.js"; // Import the correct function

const { atualizarPromocao } = carrexPromocao;

const editarPromocao = (promocaoId) => {
    const spanServico = document.querySelector(`.span-servico[data-promocao-id="${promocaoId}"]`);
    const spanValor = document.querySelector(`.span-valor[data-promocao-id="${promocaoId}"]`);
    const spanDias = document.querySelector(`.span-dias[data-promocao-id="${promocaoId}"]`);

    // Check if elements were found
    if (!spanServico || !spanValor || !spanDias) {
        console.error(`Could not find elements for promotion with ID ${promocaoId}`);
        return;
    }

    const inputServico = document.createElement("input");
    inputServico.type = "text";
    inputServico.value = spanServico.innerText;

    const inputValor = document.createElement("input");
    inputValor.type = "number";
    inputValor.value = spanValor.innerText;

    const inputDias = document.createElement("input");
    inputDias.type = "text";
    inputDias.value = spanDias.innerText;

    // Replace spans with inputs
    spanServico.replaceWith(inputServico);
    spanValor.replaceWith(inputValor);
    spanDias.replaceWith(inputDias);

    const botaoSalvar = document.querySelector(`.botao-salvar[data-promocao-id="${promocaoId}"]`);
    
    // Check if the save button was found
    if (!botaoSalvar) {
        console.error(`Could not find save button for promotion with ID ${promocaoId}`);
        return;
    }

    botaoSalvar.style.display = "block"; // Show the save button

    botaoSalvar.addEventListener("click", async (e) => {
        e.preventDefault()

        const novaPromocao = {
            servico: inputServico.value,
            valor: inputValor.value,
            dias: inputDias.value
        };

        await atualizarPromocao(promocaoId, novaPromocao);

        // Replace inputs with spans
        inputServico.replaceWith(spanServico);
        inputValor.replaceWith(spanValor);
        inputDias.replaceWith(spanDias);

        botaoSalvar.style.display = "none"; // Hide the save button

        // Update the list
        atualizarListaPromocao();
    });
};

export default editarPromocao;
