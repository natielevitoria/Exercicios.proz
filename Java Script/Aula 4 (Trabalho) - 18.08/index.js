function verificardados() {
  const nomes = ["Laryssa", "Natiele", "Bárbara"];
  const senhas = ["123", "1234", "12345"];

  const nomeInput = document.getElementById("nome").value;
  const senhaInput = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");
  const titulo = document.getElementById("título");

  mensagem.innerHTML = "Será que você está cadastrado?";
  tit.innerHTML = "Validação do usuário.";

  document.getElementById("nome").value = "";
  document.getElementById("senha").value = "";

  setTimeout(() => {
    let loginValido = false;

    for (let i = 0; i < nomes.length; i++) {
      if (nomeInput === nomes[i] && senhaInput === senhas[i]) {
        loginValido = true;
        mensagem.innerHTML = "✅ Login realizado com sucesso!";
        mensagem.style.color = "lightgreen";
        alert("Redirecionando...");
        break;
      }
    }

    setTimeout(() => {
          window.location.href = "pagina2.html";
        }, 1000);

    if (!loginValido) {
      mensagem.innerHTML = "❌ Nome ou senha incorretos!";
      mensagem.style.color = "red";
    }
  }, 3000);
}
