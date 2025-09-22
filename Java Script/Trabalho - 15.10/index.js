let frases = []; 

function trocar() {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const segundos = agora.getSeconds().toString().padStart(2, "0");
  const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataFormatada = agora.toLocaleDateString("pt-BR", opcoes);
  const diaSemana = agora.getDay();

  let mensagem;
  let tipoDia;
  let imagem;

  if (hora >= 6 && hora < 12) {
    imagem = "url('img/manha.jpg')";
    mensagem = "Bom dia! ☀️";
    frases = [
      "Acorde com determinação, vá dormir com satisfação.",
      "Cada manhã é uma nova oportunidade.",
      "O sucesso começa com um bom dia."
    ];
  } else if (hora >= 12 && hora < 18) {
    imagem = "url('img/tarde.png')";
    mensagem = "Boa tarde! 🌤️";
    frases = [
      "A tarde é para recarregar as energias.",
      "Faça da sua tarde um momento produtivo.",
      "Aproveite cada instante do seu dia."
    ];
  } else if (hora >= 18 && hora < 23) {
    imagem = "url('img/noite.jpg')";
    mensagem = "Boa noite! 🌙"; 
    frases = [
      "A noite é para sonhar e planejar.",
      "Descanse, amanhã é um novo dia.",
      "Aproveite a tranquilidade da noite."
    ];
  } else {
    imagem = "url('img/madrugada.jpg')";
    mensagem = "Hora de descansar! 😴";
    frases = [
      "A madrugada é o momento da reflexão.",
      "Durma bem, você merece.",
      "Aproveite o silêncio da noite para relaxar."
    ];
  }

  tipoDia = (diaSemana === 0 || diaSemana === 6)
    ? "🥳 Hoje é fim de semana! Aproveite para descansar."
    : "💼 Hoje é dia útil, foco nas atividades!";

  document.body.style.backgroundImage = imagem;
  document.getElementById("titulo").innerHTML = mensagem;
  document.getElementById("hora").innerHTML = `Agora são ${hora.toString().padStart(2, "0")}:${minutos}:${segundos}`;
  document.getElementById("data").innerHTML = "📅 " + dataFormatada;
  document.getElementById("diaTipo").innerHTML = tipoDia;

  trocarFrase(); 
}

function trocarFrase() {
  if (frases.length > 0) {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").innerHTML = fraseAleatoria;
  }
}

trocar();
setInterval(trocar, 1000); 
setInterval(trocarFrase, 5000); 
