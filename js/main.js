//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen");
const gamePlayScreenNode = document.querySelector("#gameplay-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
const gameTimerNode = document.querySelector("timer");
// const gameAudioNode = document.querySelector("audio")

// 1.) start button!
const startBtnNode = document.querySelector("#start-btn");
const gameSpaceNode = document.querySelector("#game-space");

// 2.) retry button at game over!

//* GLOBAL GAME VARIABLES

// at splash screen, the game has not started.


let rangerObj = null;
let poacherObj = null;
let poacherTruckArr = [];

let trapObj = null;
let trapArr = [];

let landObj = null;
let landArr = [];


let gameIntervalId = null;
let truckSpawnInterval = null;
let trapSpawnInterval = null;
let landSpawnInterval = null;

// let gameAudio playing

//* GLOBAL GAME FUNCTIONS

function gameStart() {
  startScreenNode.style.display = "none";
  gamePlayScreenNode.style.display = "flex";
  setInterval(gameLoop, Math.floor(1000 / 60)); //60 FPS

  rangerObj = new Ranger();
  truckSpawnInterval = setInterval(spawnTruck, 8000);
  trapSpawnInterval = setInterval(spawnTrap, 1500);
  landSpawnInterval = setInterval(spawnLand, 3000);
}


function gameLoop() {
  rangerObj.gravity();

  poacherTruckArr.forEach((poacherObj) => {
  poacherObj.automaticMovement()
  });
  truckDespawncheck()

  trapArr.forEach((trapObj) => {
  trapObj.automaticMovement()
  });
  trapDespawncheck()

  landArr.forEach((landObj) => {
  landObj.automaticMovement()
  });
  landDespawncheck()
  
}

function spawnLand() {
landObj = new Land();
landArr.push(landObj);

}

function landDespawncheck() {
  poacherTruckArr.forEach((landObj, index) => {
    if (landObj.x <= 0) {
      // DOM environment:
      landOb.node.remove();
      // Javascript environment
      landArr.splice(index, 1);
    }
  });
}

function trapDespawncheck() {
  trapArr.forEach((trapObj, index) => {
    if (trapObj.x <= 0) {
      trapObj.node.remove();
      trapArr.splice(index, 1);
    }
  });
}


function spawnTruck() {
poacherObj = new Poacher();
poacherTruckArr.push(poacherObj) ;

  // const randomPostionX = Math.floor(Math.random() * -200);
  // let newTruck = new Poacher(randomPostionX + 300);
  // poacherTruckArr.push(newTruck);
}

function spawnTrap() {
trapObj= new Traps();
trapArr.push(trapObj);
}


function truckDespawncheck() {
  poacherTruckArr.forEach((poacherObj, index) => {
    if (poacherObj.x <= 0) {
      // DOM environment:
      poacherObj.node.remove();
      // Javascript environment
      poacherTruckArr.splice(index, 1);
    }
  });
}



function trapDespawncheck() {
  trapArr.forEach((trapObj, index) => {
    if (trapObj.x <= 0) {
      trapObj.node.remove();
      trapArr.splice(index, 1);
    }
  });
}








//* GAME COLLISION
gameOverScreenNode 





//* EVENT LISTENERS
startBtnNode.addEventListener("click", gameStart);
gameSpaceNode.addEventListener("click", () => {
  rangerObj.jump();
});
