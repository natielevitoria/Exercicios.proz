async function carregarPiloto(piloto) {
    try {
        document.getElementById("detalhes").innerHTML = "Carregando informações do piloto...";
        
        // simula carregamento de API (2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));

        let mensagens = {
            "Ollie": "Nascido em Havering, 8 de maio de 2005, também conhecido como Ollie Bearman, é um automobilista britânico que atualmente compete na Fórmula 1 pela equipe Haas. Foi campeão italiano e da ADAC Fórmula 4 em 2021 e é membro da Ferrari Driver Academy.",
            "Gabi": "Nascido em Osasco, 14 de outubro de 2004, é um automobilista brasileiro que atualmente compete na Fórmula 1 pela equipe Sauber. Campeão da Fórmula 3 em 2023 e da Fórmula 2 em 2024, ambos como estreante.",
            "Charles": "Nascido em Monte Carlo, 16 de outubro de 1997, é piloto monegasco da Ferrari. Sonha em trazer um título mundial para Maranello.",
            "Max": "Nascido em 30 de setembro de 1997, é piloto neerlandês da Red Bull Racing. Estreou na F1 em 2015 e é tetracampeão mundial (2021–2024).",
            "Lewis": "Piloto britânico da Mercedes-AMG. Sete vezes campeão mundial e um dos maiores nomes da história da Fórmula 1."
        };

        document.getElementById("detalhes").innerHTML = mensagens[piloto] || "Piloto não encontrado.";
    }
    catch (erro) {
        document.getElementById("detalhes").innerHTML = "Erro: " + erro.message;
    }
}
