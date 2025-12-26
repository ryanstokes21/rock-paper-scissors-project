
function getComputeChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    return 'rock';
  } else if (computerChoice <= 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getUserChoice() {
  let answer = prompt('Rock, Paper, or Scissors?');
  if (answer === 'rock') {
    return 'rock';
  } else if (answer === 'paper') {
    return 'paper';
  } else if (answer === 'scissors') {
    return 'scissors'
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      console.log(`Tie! You: ${userScore} - Computer: ${computerScore}`);
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      console.log(`You win! ${userChoice} beats ${computerChoice}. You: ${userScore} - Computer: ${computerScore}`);
      userScore++;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      console.log(`You win! ${userChoice} beats ${computerChoice}. You: ${userScore} - Computer: ${computerScore}`);
      userScore++;
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      console.log(`You win! ${userChoice} beats ${computerChoice}. You: ${userScore} - Computer: ${computerScore}`);
      userScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${userChoice}. You: ${userScore} - Computer: ${computerScore}`);
      computerScore++;
    }
  }

 
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
}


playGame();
