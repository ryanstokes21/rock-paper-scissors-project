//get a random number
function getRandomNumber() {
  const rndNum = Math.floor(Math.random() * 3) + 1;
  return rndNum;
}

function getComputerChoice() {
  let computerChoice = getRandomNumber();

  //if a number is less than or equal to a target number
  //computer will pick 'rock' 'paper' or 'scissors'
  switch (computerChoice) {
    case 1:
      console.log('Rock');
      break;
    case 2:
      console.log('Paper');
      break;
    case 3:
      console.log('Scissors');
      break;
  }
}

function getUserChoice() {
  //prompt for users choice for Rock Paper or Scissors
  let userChoice = prompt('Choose Rock, Paper, or Scissors');
  const normalizeChoice = userChoice.trim().toLowerCase();

  //user inputs choice
  //If user inputs Rock Paper of Scissors
  //display choice in console.
  switch (normalizeChoice) {
    case 'rock':
      console.log('Rock');
      break;
    case 'paper':
      console.log('Paper');
      break;
    case 'scissors':
      console.log('Scissors');
      break;
  }
}
