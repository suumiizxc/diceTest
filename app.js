var activePlayer = 1;

var scores = [0, 0];

var playerStatus = 0;

var roundScore = 0;

var gameEnd = false;

var diceNumber = Math.floor(Math.random() * 6) + 1;

// querySelector using # symbol tag
// getElementById not using # symbol tag
//window.document.querySelector("#score-0").textContent = dice;

document.querySelector(".btn-roll").addEventListener("click", rollDice);
document.querySelector(".btn-hold").addEventListener("click", diceHold);
document.querySelector(".btn-new").addEventListener("click", diceGameStart);

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

function rollDice() {
  if (gameEnd === false) {
    diceNumber = Math.floor(Math.random() * 6) + 1;
    if (playerStatus === 0) {
      document.getElementById("current-0").textContent = diceNumber;
      scores[0] = scores[0] + diceNumber;
      document.getElementById("score-0").textContent = scores[0];
    } else {
      document.getElementById("current-1").textContent = diceNumber;
      scores[1] = scores[1] + diceNumber;
      document.getElementById("score-1").textContent = scores[1];
    }
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    console.log("Dice number is : " + diceNumber);
    diceTerminal();
    diceGameTerminal();
    console.log(playerStatus);
  }
}

const demo = document.querySelector("player-0-panel active");

function diceTerminal() {
  if (diceNumber === 1) {
    if (playerStatus === 0) {
      console.log(demo);
      playerStatus = 1;
    } else {
      playerStatus = 0;
    }
  }
}

function diceGameTerminal() {
  if (scores[0] >= 100) {
    // Player One win
    document.getElementById("score-0").textContent = "Win";
    document.getElementById("score-1").textContent = "Lose";
    gameEnd = true;
  }
  if (scores[1] >= 100) {
    document.getElementById("score-0").textContent = "Lose";
    document.getElementById("score-1").textContent = "Win";
    gameEnd = true;
  }

  if (gameEnd) {
    diceDom.style.display = "none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
  }
}

function diceHold() {
  if (playerStatus === 0) {
    playerStatus = 1;
    console.log("Player One hold");
  } else {
    playerStatus = 0;
    console.log("Player Two hold");
  }
}

function diceGameStart() {
  gameInit();
  gameEnd = false;
}

function gameInit() {
  scores = [0, 0];
  playerStatus = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
}
