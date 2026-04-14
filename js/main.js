//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen");
const gamePlayScreenNode = document.querySelector("#gameplay-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
// const gameAudioNode = document.querySelector("audio")

// 1.) start button!
const startBtnNode = document.querySelector("#start-btn");

// 2.) retry button at game over!


//* GLOBAL GAME VARIABLES

// at splash screen, the game has not started.

let gameIntervalId = null;
let timeCount = null;
// let gameAudio playing




//* GLOBAL GAME FUNCTIONS

function gameStart() {
  //changing the states
  //  gameAudioNode.style.visibility ="hidden"
  startScreenNode.style.display = "none";
  gamePlayScreenNode.style.display = "flex";

 gameIntervalId =  setInterval(gameLoop, Math.floor(1000 / 60));

  // adding the initial elements of the game


  // initialize the other intervals of the game
//  tubeSpawnInterval = setInterval(spawnTube, 2000);
}




//* EVENT LISTENERS
startBtnNode.addEventListener("click", gameStart);