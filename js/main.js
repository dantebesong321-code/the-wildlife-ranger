//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen");
const gamePlayScreenNode = document.querySelector("#gameplay-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
// const gameAudioNode = document.querySelector("audio")

// 1.) start button!
const startBtnNode = document.querySelector("#start-btn");
const gameSpaceNode = document.querySelector("#game-space");

// 2.) retry button at game over!


//* GLOBAL GAME VARIABLES

// at splash screen, the game has not started.

let gameIntervalId = null;
let timeCount = null;
let foregroundTree = [];
let rangerObj = null;
let poacherTruck = null;
let poacherTruckArr = [];

// let gameAudio playing




//* GLOBAL GAME FUNCTIONS

function gameStart() {
  //changing the states
  //  gameAudioNode.style.visibility ="hidden"
  startScreenNode.style.display = "none";
  gamePlayScreenNode.style.display = "flex";

 gameIntervalId =  setInterval(gameLoop, Math.floor(1000 / 60));

rangerObj = new Ranger();
poacherTruck = new Poacher();

function gameLoop() {
  rangerObj.gravity();
  // tubeObj.automaticMovement()
  poacherTruck.forEach((tubeObj) => {
    poacherTruck.automaticMovement();
  });
  // tubeDespawncheck();
  // birdTubeCollitionCheck()
}



// console.log(poacherTruck)

  // adding the initial elements of the game

  // initialize the other intervals of the game
//  foregroundSpawnInterval = setInterval(spawnTree, 2000);
}







//* EVENT LISTENERS
startBtnNode.addEventListener("click", gameStart);
gameSpaceNode.addEventListener("click", () => {rangerObj.jump()})