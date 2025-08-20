function mensagem() {
        const men = document.getElementById("mensagem");
        const cupomDigitado = "diadecomprar";
        const cup = document.getElementById("cupom").value;
        const bot = document.getElementById("botao");

        if (cup == cupomDigitado) {
          men.innerHTML = "Cupom válido, desconto aplicado!";
        } else {
          men.innerHTML = "Cupom inválido!";
        }
      }