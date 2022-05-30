
// need a function computerPlay that will randomly return rock paper or scissors. This is the computers player

const ROCK = 3;
const SCISSOORS = 2;
const PAPER = 1;


function computerPlay() {
  let min = Math.ceil(1);
  let max = Math.floor(3);
  return Math.floor(Math.random() * (max-min+1) + min);
}

function playerPlay() {
  
}
function playRound(playerSelection, computerSelection) {
  

  if (playerSelection === computerSelection) {
    return false; // player didn't win
  }

  if ( (playerSelection === PAPER && computerSelection === ROCK) || playerSelection > computerSelection) {
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
  if (weapon.toUpperCase() === "SCISSORS" || weapon.toUpperCase() === "SCISSOR") {
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
    console.log('You Won! ' + getWeapon(playerWeapon) + ' beats ' + getWeapon(computerWeapon) + '!');
  } else if ( playerWeapon === computerWeapon ) {
    console.log('You tied! ' + getWeapon(playerWeapon) + ' and ' + getWeapon(computerWeapon) + ' cancel each other out.');
  } else {
    console.log('You lost! ' + getWeapon(computerWeapon) + ' beats ' + getWeapon(playerWeapon) + '.');
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerChoice = 0;
  let computerChoice;
  for (var i = 0; i < 5; i++) {
    while ( playerChoice === 0 ) {
      playerChoice = setWeapon( prompt('Select your weapon: Rock, Paper or Scissors'));
      if (playerChoice === 0) {
	alert('You cannot use that weapon in this fight!')
      }
    }
    computerChoice = computerPlay();
    let didPlayerWin = (playRound(playerChoice, computerChoice));
    if (didPlayerWin)  {
      playerScore += 1;
    } else if (playerChoice != computerChoice) {
      computerScore += 1;
    }
    printResult(didPlayerWin, playerChoice, computerChoice);
    playerChoice = 0; // reset the while.
    
  }
  console.log('And the winner is.....' + (playerScore >= computerScore ? "The Hooman" : "The COMPUTAR") + ' with a score of ' + (playerScore >= computerScore ? playerScore : computerScore) + ' to ' + (playerScore >= computerScore ? computerScore : playerScore));

}


game();

