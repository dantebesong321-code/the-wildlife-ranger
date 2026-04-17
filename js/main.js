//* GLOBAL DOM ELEMENTS

const startScreenNode = document.querySelector("#start-screen");
const gamePlayScreenNode = document.querySelector("#gameplay-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
const timerNode = document.querySelector("#timer");
const healthBarNode = document.querySelector("#health-bar");

const startBtnNode = document.querySelector("#start-btn");
const gameSpaceNode = document.querySelector("#game-space");
const tryAgainBtnNode = document.querySelector("#try-again-btn");

//* GLOBAL GAME VARIABLES

// Timer
let gameTime = 0;
let timerInterval = null;

// Bonus
let bonusCount = 0;

// Game objects
let rangerObj = null;
let poacherTruckArr = [];
let trapArr = [];
let bonusArr = [];
let landArr = [];

// Intervals
let gameIntervalId = null;
let truckSpawnInterval = null;
let trapSpawnInterval = null;
let bonusSpawnInterval = null;
let landSpawnInterval = null;

//* CLEANUP FUNCTIONS

function clearAllIntervals() {
  clearInterval(rangerObj);
  clearInterval(gameIntervalId);
  clearInterval(truckSpawnInterval);
  clearInterval(trapSpawnInterval);
  clearInterval(bonusSpawnInterval);
  clearInterval(landSpawnInterval);
  clearInterval(timerInterval);

  gameIntervalId = null;
  truckSpawnInterval = null;
  trapSpawnInterval = null;
  landSpawnInterval = null;
  timerInterval = null;
  bonusSpawnInterval = null;
}

function clearAllObjects() {
  [...poacherTruckArr, ...trapArr, ...landArr, ...bonusArr].forEach((obj) => {
    if (obj && obj.node) obj.node.remove();
  });

  if (rangerObj && rangerObj.node) {
    rangerObj.node.remove();
  }

  rangerObj = null;
  treeObj = null;

  poacherTruckArr = [];
  trapArr = [];
  bonusArr = [];
  landArr = [];
}

//* BONUS UI

function updateBonusUI() {
  const el = document.querySelector("#bonus-count");
  if (el) el.innerText = "Bonuses: " + bonusCount + " / 10";
}

//* GAME START

function gameStart() {
  clearAllIntervals();
  clearAllObjects();

  bonusCount = 0;
  updateBonusUI();

  // let treeObj = new Tree();

  gameTime = 60;
  timerInterval = setInterval(() => {
    gameTime--;

    let minutes = Math.floor(gameTime / 60);
    let seconds = gameTime % 60;

    let formattedTime =
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

    timerNode.innerText = formattedTime;

    if (gameTime <= 0) {
      gameOver();
    } else if (gameTime <= 20) {
      timerNode.style.color = "red";
    } else if (gameTime <= 40) {
      timerNode.style.color = "orange";
    } else {
      timerNode.style.color = "white";
    }
  }, 1000);

  startScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "none";
  gamePlayScreenNode.style.display = "flex";

  rangerObj = new Ranger();

  gameIntervalId = setInterval(gameLoop, Math.floor(1000 / 60));
  truckSpawnInterval = setInterval(spawnTruck, 8000);
  bonusSpawnInterval = setInterval(spawnBonus, 3000);
  trapSpawnInterval = setInterval(spawnTrap, 1500);
  landSpawnInterval = setInterval(spawnLand, 2000);
}

//* GAME LOOP

function gameLoop() {
  rangerObj.gravity();

  poacherTruckArr.forEach((obj) => obj.automaticMovement());
  truckDespawncheck();

  trapArr.forEach((obj) => obj.automaticMovement());
  trapDespawncheck();

  bonusArr.forEach((obj) => obj.automaticMovement());
  bonusDespawncheck();

  landArr.forEach((obj) => obj.automaticMovement());
  landDespawncheck();

  rangerTruckCollisionCheck();
  rangerTrapCollisionCheck();
  rangerBonusCollisionCheck();
}

//* SPAWNING

// Land
function spawnLand() {
  const landObj = new Land();
  landArr.push(landObj);
}

function landDespawncheck() {
  landArr.forEach((landObj, index) => {
    if (landObj.x < 0) {
      landObj.node.remove();
      landArr.splice(index, 1);
    }
  });
}

// Truck
function spawnTruck() {
  const poacherObj = new Poacher();
  poacherTruckArr.push(poacherObj);
}

function truckDespawncheck() {
  poacherTruckArr.forEach((poacherObj, index) => {
    if (poacherObj.x <= 0) {
      poacherObj.node.remove();
      poacherTruckArr.splice(index, 1);
    }
  });
}

// Trap
function spawnTrap() {
  const trapObj = new Traps();
  trapArr.push(trapObj);
}

function trapDespawncheck() {
  trapArr.forEach((trapObj, index) => {
    if (trapObj.x <= 0) {
      trapObj.node.remove();
      trapArr.splice(index, 1);
    }
  });
}

// Bonus
function spawnBonus() {
  const bonusObj = new BonusBox();
  bonusArr.push(bonusObj);
}

function bonusDespawncheck() {
  bonusArr.forEach((bonusObj, index) => {
    if (bonusObj.x <= 0) {
      bonusObj.node.remove();
      bonusArr.splice(index, 1);
    }
  });
}

//* COLLISION

function collisionCheck(elem1, elem2) {
  return (
    elem1.x < elem2.x + elem2.width &&
    elem1.x + elem1.width > elem2.x &&
    elem1.y < elem2.y + elem2.height &&
    elem1.y + elem1.height > elem2.y
  );
}

function rangerTruckCollisionCheck() {
  poacherTruckArr.forEach((poacherObj) => {
    if (collisionCheck(rangerObj, poacherObj)) {
      gameOver();
    }
  });
}

function rangerTrapCollisionCheck() {
  trapArr.forEach((trapObj) => {
    if (collisionCheck(rangerObj, trapObj)) {
      gameOver();
    }
  });
}

//* BONUS COLLECTION

function collectBonus(index) {
  const bonusObj = bonusArr[index];

  // Remove from DOM + array
  bonusObj.node.remove();
  bonusArr.splice(index, 1);

  // Increment and update UI
  bonusCount++;
  updateBonusUI();

  // Add time, capped at 60s
  gameTime = Math.min(gameTime + 5, 60);

  // Win condition: 10 bonuses collected
  if (bonusCount >= 10) {
    gameOver("win");
    return;
  }

  timerNode.style.transform = "scale(1.3)";
  setTimeout(() => {
    timerNode.style.transform = "scale(1)";
  }, 150);
}

function rangerBonusCollisionCheck() {
  for (let i = bonusArr.length - 1; i >= 0; i--) {
    if (bonusArr[i] && collisionCheck(rangerObj, bonusArr[i])) {
      collectBonus(i);
    }
  }
}

//* GAME OVER

function gameOver(outcome) {
  clearAllIntervals();

  startScreenNode.style.display = "none";
  gamePlayScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";

  const msgEl = document.querySelector("#result-message");
  if (!msgEl) return;

  if (outcome === "win" || bonusCount >= 10) {
    msgEl.innerText = "Mission complete! All 10 bonuses collected.";
  } else if (bonusCount < 5) {
    msgEl.innerText =
      "Mission failed. Only " +
      bonusCount + 
      " bonus" +
      (bonusCount === 1 ? "" : "es") +
      " collected. Need at least 5.";
  } else {
    msgEl.innerText =
      "Time's up. " + bonusCount + " bonuses collected — so close!";
  }
}

//* EVENT LISTENERS

startBtnNode.addEventListener("click", gameStart);

gameSpaceNode.addEventListener("click", () => {
  if (rangerObj) {
    rangerObj.jump();
  }
});

tryAgainBtnNode.addEventListener("click", () => {
  gameOverScreenNode.style.display = "none";
  startScreenNode.style.display = "flex";
});
