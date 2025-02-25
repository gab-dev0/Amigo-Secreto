let listaDeNomes = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();
    if (nome !== "") {
        listaDeNomes.push(nome);
        atualizarLista();
        nomeInput.value = "";
    }
}

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    listaDeNomes.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    const nomeSorteadoElement = document.getElementById("resultado");
    nomeSorteadoElement.innerHTML = "";
    if (listaDeNomes.length === 0) {
        nomeSorteadoElement.textContent = "Adicione nomes à lista antes de sortear!";
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
    const nomeSorteado = listaDeNomes[indiceSorteado];
    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
    nomeSorteadoElement.appendChild(li);
}