const listaPromocao = async () => {
    try {
        const resposta = await fetch("http://localhost:3000/promocao");
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error(error);
    }
}

const getPromocao = async () => {
    try {
        const resposta = await fetch("http://localhost:3000/promocao");
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error(error);
    }
}

const atualizarPromocao = async (id, promocaoAtualizada) => {
    try {
        const resposta = await fetch(`http://localhost:3000/promocao/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(promocaoAtualizada)
        });
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error(error);
    }
}

const enviarPromocao = async (novaPromocao) => {
    try {
        const resposta = await fetch("http://localhost:3000/promocao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novaPromocao),
        });
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error(error);
    }
}

const deletarPromocao = async (idPromocao) => {
    try {
        const resposta = await fetch(`http://localhost:3000/promocao/${idPromocao}`, {
            method: 'DELETE',
        });
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error(error);
    }
}

export const carrexPromocao = {
    listaPromocao,
    getPromocao,
    atualizarPromocao,
    enviarPromocao,
    deletarPromocao
};