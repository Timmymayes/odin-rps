// setup event listeners

const ROCK = 3;
const SCISSOORS = 2;
const PAPER = 1;

function getPlayerSelection(e) {
  let playerWeapon = setWeapon(e.target.id);
  let computerWeapon = computerPlay();
  printResult(
    executeRound(playerWeapon, computerWeapon),
    playerWeapon,
    computerWeapon
  );
  console.log(executeRound());
}

const buttons = document.querySelectorAll(".weapon");
buttons.forEach((btn) => btn.addEventListener("click", getPlayerSelection));

function computerPlay() {
  let min = Math.ceil(1);
  let max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function executeRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return false; // player didn't win
  }

  if (
    (playerSelection === PAPER && computerSelection === ROCK) ||
    playerSelection > computerSelection
  ) {
    return true; // player wins
  } else {
    return false; // player loses
  }
}

function setWeapon(weapon) {
  if (weapon.toUpperCase() === "ROCK") {
    return 3;
  }
  if (weapon.toUpperCase() === "PAPER") {
    return 1;
  }
  if (
    weapon.toUpperCase() === "SCISSORS" ||
    weapon.toUpperCase() === "SCISSOR"
  ) {
    return 2;
  }
  return 0;
}

function getWeapon(selection) {
  if (selection === 2) {
    return "Scissors";
  }
  if (selection === 1) {
    return "Paper";
  }
  if (selection === 3) {
    return "Rock";
  }
}

function printResult(isPlayerWinner, playerWeapon, computerWeapon) {
  if (isPlayerWinner) {
    console.log(
      "You Won! " +
        getWeapon(playerWeapon) +
        " beats " +
        getWeapon(computerWeapon) +
        "!"
    );
  } else if (playerWeapon === computerWeapon) {
    console.log(
      "You tied! " +
        getWeapon(playerWeapon) +
        " and " +
        getWeapon(computerWeapon) +
        " cancel each other out."
    );
  } else {
    console.log(
      "You lost! " +
        getWeapon(computerWeapon) +
        " beats " +
        getWeapon(playerWeapon) +
        "."
    );
  }
}

// computerChoice = computerPlay();
