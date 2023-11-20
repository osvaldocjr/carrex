import { carrexPromocao } from "../../../services/promocao-services.js";
import { atualizarListaPromocao } from "./adicionar-promocao.js";

export function deletarPromocao(promocaoId) {
    carrexPromocao.deletarPromocao(promocaoId)
        .then(response => {
            if (response.status === "success") {
                console.log(`Pergunta ${promocaoId} deletada com sucesso.`);
                listaPromocao(novaPromocao); // Make sure novaPromocao is defined
            } else {
                console.error(`Erro ao deletar a pergunta ${promocaoId}:`, response.message);
            }
        })
        .catch(error => console.error(`Erro ao deletar a pergunta ${promocaoId}:`, error));
}