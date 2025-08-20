function verificardados() {
    const nomes = ["Cintia", "Natiele", "Tete"];
    const senhas = ["123", "1234", "12345"];

    const nomeInput = document.getElementById("nome").value;
    const senhaInput = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    let loginValido = false;

    for (let i = 0; i < nomes.length; i++) {
        if (nomeInput === nomes[i] && senhaInput === senhas[i]) {
            loginValido = true;
            mensagem.innerHTML = "✅ Login realizado com sucesso!";
            mensagem.style.color = "lightgreen";
            break;
        }
    }

    if (!loginValido) {
        mensagem.innerHTML = "❌ Nome ou senha incorretos!";
        mensagem.style.color = "red";
    }
}