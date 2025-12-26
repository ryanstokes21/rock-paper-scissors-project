let userScore = 0;
let computerScore = 0;

function getComputeChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    console.log( computerChoice, 'Rock');
  } else if (computerChoice <= 0.66) {
    console.log(computerChoice, 'Paper');
  } else {
    console.log(computerChoice, 'Scissors');
  }
}

function getUserChoice() {
  let answer = prompt('Rock, Paper, or Scissors?').toLowerCase();
  switch (answer) {
    case 'rock':
      console.log('Rock');
      break;
    case 'paper':
      console.log('Paper');
      break;
    case 'scissors':
      console.log('Scissors');
      break;
    default:
      console.log('Pick Rock, Paper, or Scissors');
      getUserChoice();
  }
}

getUserChoice();
getComputeChoice();