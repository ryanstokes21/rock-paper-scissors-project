const resultsEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

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
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
  }
}

function checkWinner() {
  if (userScore === 5 || computerScore === 5) {
    gameOver = true;
    resultsEl.textContent = 'Game Over!!';
  }
}

function displayUserWins(userChoice, computerChoice) {
  resultsEl.textContent = `You win!! ${userChoice} beats ${computerChoice}`;
}

function displayScore() {
  scoreEl.textContent = `User score: ${userScore} - computer score: ${computerScore}`;
}
let userScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(userSelection) {
  const userChoice = userSelection;
  const computerChoice = getComputerChoice();
  //compare user and computer choices
  if (userChoice === computerChoice) {
    resultsEl.textContent = 'Tie';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    displayUserWins(userChoice, computerChoice);
    userScore++;
    displayScore();
    checkWinner();
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    displayUserWins(userChoice, computerChoice);
    userScore++;
    displayScore();
    checkWinner();
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    displayUserWins(userChoice, computerChoice);
    userScore++;
    displayScore();
    checkWinner();
  } else {
    resultsEl.textContent = `You lose!! ${computerChoice} beats ${userChoice}`;
    computerScore++;
    displayScore();
    checkWinner();
  }
  //if there is a winner
  //increment the score for the winner by 1
  //Otherwise its a tie and the score does not increment
}

const btnContainer = document.getElementById('btn-container');

btnContainer.addEventListener('click', (e) => {
  if (gameOver === true) return;
  const button = e.target.closest('.btn');

  if (!button || !btnContainer.contains(button)) return;

  const value = button.dataset.value;
  playRound(value);
});
