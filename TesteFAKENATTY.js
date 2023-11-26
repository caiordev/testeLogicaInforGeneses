//O array foi utilizado pela facilidade de manipulação e facilidade computacional em percorrer o array.
//A lista seria bem utilizado se fosse preciso retirar e adicionar elementos em qualquer local.

const campeao = (pontuacao) => {
  //Inicializa o contador e um array para armazenar os resultados.
  let i = 0;
  let resultados = [];

  //Loop principal que recebe os resultados da entrada.
  for (i; i < pontuacao.length; i++) {
    //Dividi a string recebida em duas partes (G e P) e converto para número.
    const [G, P] = pontuacao[i++].split(" ").map(Number);

    //para o loop caso receba números iguais a zero.
    if (P === 0 && G === 0) return;
    //armazena os resultados da corrida.
    const resultadosDasCorridas = [];
    //Loop para percorrer cada corrida
    for (let j = 0; j < G; j++) {
      if (i >= pontuacao.length) {
        console.error("Resultado incompleto");
        break;
      }
      //os resultados da corrida são armazenados no array.
      resultadosDasCorridas.push(pontuacao[i++].split(" ").map(Number));
    }

    //para ler o sistema de pontos
    const S = Number(pontuacao[i++]);

    //armazena o sistema de pontos
    const sistemaDePontos = [];
    for (let j = 0; j < S; j++) {
      if (i >= pontuacao.length) {
        console.error("Pontos incompletos");
        break;
      }

      //adciona o sistema de pontos ao array
      const sistema = pontuacao[i++].split(" ").map(Number);
      sistemaDePontos.push({
        K: sistema[0],
        points: sistema.slice(1),
      });
    }

    //verifica se o sitema de ponto está definido.
    if (sistemaDePontos.length === 0) {
      console.error("Sem pontos definidos");
      break;
    }

    //Armazenar os pontos de cada piloto.
    const pontosDoMotorista = new Array(P).fill(0);

    //loop para cada resultado da corrida.
    for (const resultadoCorrida of resultadosDasCorridas) {
      //Para armazenar os pontos de cada piloto de acordo com o sistema de pontos.
      for (let j = 0; j < P; j++) {
        const posicao = resultadoCorrida[j];
        pontosDoMotorista[posicao - 1] += sistemaDePontos[0].points[j];
      }
    }

    //Para encontrar o piloto com mais pontos
    let maxPontos = 0;
    let campeoes = [];

    for (let j = 0; j < P; j++) {
      if (pontosDoMotorista[j] > maxPontos) {
        maxPontos = pontosDoMotorista[j];
        campeoes = [j + 1];
      } else if (pontosDoMotorista[j] === maxPontos) {
        campeoes.push(j + 1);
      }
    }

    //Para armazenar o piloto ou o array de pilotos.
    resultados.push(campeoes.join(" "));
  }

  return resultados.join("\n");
};

const entrada = ["2 3", "3 2 1", "2 3 1", "1", "3 10 5 1", "0 0"];

console.log(campeao(entrada));
