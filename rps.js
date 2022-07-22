// setup event listeners

const ROCK = 3;
const SCISSOORS = 2;
const PAPER = 1;

const buttons = document.querySelectorAll(".weapon");
buttons.forEach((btn) => btn.addEventListener("click", getPlayerSelection));

const wrapper = document.querySelector(".wrapper");
const resultDiv = document.createElement("div");
resultDiv.classList.add("results");

function getPlayerSelection(e) {
  // check if the wrapping div has the results of a previous game if so remove it.
  if (wrapper.contains(resultDiv)) {
    resultDiv.removeChild(resultDiv.childNodes[0]);
    //    document.getElementById("test").remove();
  }
  // set player & computer weapons
  let playerWeapon = setWeapon(e.target.id);
  let computerWeapon = computerPlay();
  // get game result
  let winner = getResult(
    executeRound(playerWeapon, computerWeapon),
    playerWeapon,
    computerWeapon
  );
  // write the result to the page
  const result = document.createTextNode(winner);
  resultDiv.appendChild(result);
  resultDiv.setAttribute("id", "test");
  wrapper.appendChild(resultDiv);
}

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

function getResult(isPlayerWinner, playerWeapon, computerWeapon) {
  let resultText = "";
  if (isPlayerWinner) {
    resultText =
      "You Won! " +
      getWeapon(playerWeapon) +
      " beats " +
      getWeapon(computerWeapon) +
      "!";
  } else if (playerWeapon === computerWeapon) {
    resultText =
      "You tied! " +
      getWeapon(playerWeapon) +
      " and " +
      getWeapon(computerWeapon) +
      " cancel each other out.";
  } else {
    resultText =
      "You lost! " +
      getWeapon(computerWeapon) +
      " beats " +
      getWeapon(playerWeapon) +
      ".";
  }
  return resultText;
}

// computerChoice = computerPlay();
