let userScore = 0;
let computerScore = 0;

function getComputeChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    return 'Rock';
  } else if (computerChoice <= 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function getUserChoice() {
  let answer = prompt('Rock, Paper, or Scissors?').toLowerCase();
  switch (answer) {
    case 'rock':
      answer = 'Rock';
      break;
    case 'paper':
      answer = 'Paper';
      break;
    case 'scissors':
      answer = 'Scissors';
      break;
    default:
      alert('Pick Rock, Paper, or Scissors');
      getUserChoice();
  };
  return answer;
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log(`Tie!`);
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
  }
  console.log(userChoice, 'userChoice')
  console.log(computerChoice, 'computerChoice')
}

const userSelection = getUserChoice();
const computerSelection = getComputeChoice();

playRound(userSelection, computerSelection);