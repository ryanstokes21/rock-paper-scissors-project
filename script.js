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

function getUserChoice() {
  //prompt for users choice for Rock Paper or Scissors
  let userChoice = prompt('Choose Rock, Paper, or Scissors');
  const normalizeChoice = userChoice.trim().toLowerCase();

  //user inputs choice
  //If user inputs Rock Paper of Scissors
  //display choice in console.
  switch (normalizeChoice) {
    case 'rock':
      return 'rock';
      break;
    case 'paper':
      return 'paper';
      break;
    case 'scissors':
      return 'scissors';
      break;
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  function playRound() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    //compare user and computer choices
    if (userChoice === computerChoice) {
      console.log('Tie!');
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      console.log(`You win!! ${userChoice} beats ${computerChoice}`);
      userScore++;
      console.log(
        `User score: ${userScore} - computer score: ${computerScore}`,
      );
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      console.log(`You win!! ${userChoice} beats ${computerChoice}`);
      userScore++;
      console.log(
        `User score: ${userScore} - computer score: ${computerScore}`,
      );
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      console.log(`You win!! ${userChoice} beats ${computerChoice}`);
      userScore++;
      console.log(
        `User score: ${userScore} - computer score: ${computerScore}`,
      );
    } else {
      console.log(`You lose!! ${computerChoice} beats ${userChoice}`);
      computerScore++;
      console.log(
        `User score: ${userScore} - computer score: ${computerScore}`,
      );
    }
    //if there is a winner
    //increment the score for the winner by 1
    //Otherwise its a tie and the score does not increment
  }
  for (let r = 1; r <= 5; r++) {
    playRound();
  }
}

playGame();
