// let userScore = 0;
// let computerScore = 0;

function getComputeChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    console.log( computerChoice, 'Rock');
  } else if (computerChoice <= 0.66) {
    console.log(computerChoice, 'paper');
  } else {
    console.log(computerChoice, 'Scissors');
  }
}

getComputeChoice();