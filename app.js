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
