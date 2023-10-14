//Buscando variáveis

const arena = document.getElementById('arena');
const robo1 = document.getElementById('robo1');
const robo2 = document.getElementById('robo2');
const placar1 = document.getElementById('placar1');
const placar2 = document.getElementById('placar2');

//Definindo posição dos robôs para começar a batalha
let robo1X = 60;
let robo1Y = 60;

let robo2X = 350;
let robo2Y = 350;

//Definindo o total de vida dos robôs
let vidaRobo1 = 100;
let vidaRobo2 = 100;

//Definindo variável que irá somar o total de colisões
let colisaosoma = 0;

// Definindo movimentação do robô com setas
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && robo1Y > 70) {
    robo1Y -= 10;
  } else if (event.key === "ArrowDown" && robo1Y < 350) {
    robo1Y += 10;
  } else if (event.key === "ArrowLeft" && robo1X > 70) {
    robo1X -= 10;
  } else if (event.key === "ArrowRight" && robo1X < 350) {
    robo1X += 10;
  }

  robo1.style.left = robo1X + "px";
  robo1.style.top = robo1Y + "px";
  robo2.style.margin = 0;
  colisao();
});

//Definindo movimentação do robô com letras
document.addEventListener("keydown", (event) => {
  if ((event.key === "W" || event.key === "w") && robo2Y > 60) {
    robo2Y -= 10;
  } else if ((event.key === "S" || event.key === "s") && robo2Y < 350) {
    robo2Y += 10;
  } else if ((event.key === "A" || event.key === "a") && robo2X > 60) {
    robo2X -= 10;
  } else if ((event.key === "D" || event.key === "d") && robo2X < 350) {
    robo2X += 10;
  }

  robo2.style.left = robo2X + "px";
  robo2.style.top = robo2Y + "px";
  colisao();
});

//Definindo função da colisão
function colisao(robo1, robo2) {
  const colisao1 = 10;
  const distancia = Math.sqrt((robo1X - robo2X) + (robo1Y - robo2Y));

//Ativando modal que apresenta o robô vencedor
  if (colisaosoma >= 5) {
    if (vidaRobo1 > vidaRobo2) {
      document.querySelector('.modal-fim')
        .classList.add('active')
    }
    //Trocando a foto caso o robô vencedor seja o 2
    else {
      document.querySelector('.modal-fim')
        .classList.add('active')
      document.getElementById("robo1img").src = "assets/robo2.png"
    }
  }

  if (distancia < colisao1) {
    colisaosoma += 1;

    //Voltando robôs para posição original após colisão
    robo1X = 70;
    robo1Y = 70;
    robo2X = 350;
    robo2Y = 350;

    //Sorteando um número aleatório e subtraindo da vida do robô 1
    let mensagemRobo1 = '';
    let numeroSorteadoRobo1 = parseInt(Math.random() * 20);
    let pontosRobo1 = vidaRobo1 - numeroSorteadoRobo1;
    vidaRobo1 = pontosRobo1;
    mensagemRobo1 = vidaRobo1;
    placar1.innerHTML = mensagemRobo1;

    //Sorteando um número aleatório e subtraindo da vida do robô 1
    let mensagemRobo2 = '';
    let numeroSorteadoRobo2 = parseInt(Math.random() * 20);
    let pontosRobo2 = vidaRobo2 - numeroSorteadoRobo2;
    vidaRobo2 = pontosRobo2;
    mensagemRobo2 = vidaRobo2;
    placar2.innerHTML = mensagemRobo2;
  }
}
//Função para recarregar tela após final do jogo
function NovaPartida() {
  window.location.reload();
}

//Função para fechar o modal inicial
function Modal(){
  document.querySelector('.modal-inicio')
    .classList.add('active');
}

