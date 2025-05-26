const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const points = document.querySelector(".points");
const pointsDiv = document.querySelector(".points-div");
const gameBoard = document.querySelector(".game-board");
const gameOver = document.querySelector(".game_over");
const potuacaoOver = document.querySelector(".pontuacao-game");

let pontuacao = 0;
let canScore = true;

function jump() {
  if (!mario.classList.contains("jump")) {
    mario.classList.add("jump");
    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
  return;
}

function GameOver() {}

const loop = setInterval(() => {
  points.innerHTML = `<span> ${pontuacao} </span>`;

  const pipePosition = pipe.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 122 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}`;

    mario.style.animation = "none";
    mario.style.left = `${marioPosition}`;

    mario.src = "./images/game-over.png";
    mario.style.width = "74px";
    mario.style.marginLeft = "50px";

    pointsDiv.style.display = "none";

    gameOver.style.display = "flex";
    gameOver.style.flexDirection = "column";
    gameOver.style.alignItems = "center";
    potuacaoOver.innerHTML = `<span class="points-game-over"> sua pontuação foi de ${pontuacao}</span>`;

    clearInterval(loop);
  }

  if (pipePosition <= 0 && canScore) {
    pontuacao++;
    canScore = false;
  }

  if (pipePosition === gameBoard.clientWidth) {
    canScore = true;
  }
}, 10);

document.addEventListener("keydown", jump);
