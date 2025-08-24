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

    document.getElementById("nome").value = "";
    document.getElementById("senha").value = "";
}

function verificardados() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  if (!nome || !senha) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  alert("Login enviado!");
}

document.getElementById("toggleSenha").addEventListener("click", function () {
  const senhaInput = document.getElementById("senha");
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    this.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    senhaInput.type = "password";
    this.classList.replace("fa-eye-slash", "fa-eye");
  }
});
