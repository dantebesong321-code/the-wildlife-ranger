//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen");
const gamePlayScreenNode = document.querySelector("#gameplay-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
const gameTimerNode = document.querySelector("timer");

// 1.) start button!
const startBtnNode = document.querySelector("#start-btn");
const gameSpaceNode = document.querySelector("#game-space");
const tryAgainBtnNode = document.querySelector("#try-again-btn");


// 2.) retry button at game over!

//* GLOBAL GAME VARIABLES

// at splash screen, the game has not started.

//  startScreenNode.style.display = "flex";
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
  gameOverScreenNode.style.display = "none";
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

  rangerTruckCollisionCheck()
  rangerTrapCollisionCheck()
  
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

function rangerTruckCollisionCheck() {

 poacherTruckArr.forEach((poacherObj) => {
    let isColliding = collisionCheck(rangerObj, poacherObj)
    if (isColliding === true){
      gameOver()
    }
  })

}

function collisionCheck(elem1, elem2) {
  return (
    elem1.x < elem2.x + elem2.width &&
    elem1.x + elem1.width > elem2.x &&
    elem1.y < elem2.y + elem2.height &&
    elem1.y + elem1.height > elem2.y
  );
}


function rangerTrapCollisionCheck() {

 trapArr.forEach((trapObj) => {
    let isColliding = collisionCheck(rangerObj, trapObj)
    if (isColliding === true){
      gameOver()
    }
  })

}

function collisionCheck(elem1, elem2) {
  return (
    elem1.x < elem2.x + elem2.width &&
    elem1.x + elem1.width > elem2.x &&
    elem1.y < elem2.y + elem2.height &&
    elem1.y + elem1.height > elem2.y
  );
}




//* EVENT LISTENERS

function gameOver(){
//1. Set clear intervals
clearInterval(gameIntervalId)
clearInterval(trapSpawnInterval)
clearInterval(truckSpawnInterval)
clearInterval(landSpawnInterval)

//2. changes states
startScreenNode.style.display = "none";
gamePlayScreenNode.style.display = "none";
gameOverScreenNode.style.display = "flex";
}


//* EVENT LISTENERS
startBtnNode.addEventListener("click", gameStart);
gameSpaceNode.addEventListener("click", () => {
  rangerObj.jump();
});
tryAgainBtnNode.addEventListener("click", startScreenNode);
