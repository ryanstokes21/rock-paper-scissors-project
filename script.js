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
  let answer = prompt('Rock, Paper, or Scissors?').toLowerCase();
  if (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors'){
    return getUserChoice();
  } else{
    return answer;
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      console.log(`Tie! You: ${userScore} - Computer: ${computerScore}`);
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      ++userScore;
      console.log(`You win! ${userChoice} beats ${computerChoice}. You: ${userScore} - Computer: ${computerScore}`);
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      ++userScore;
      console.log(`You win! ${userChoice} beats ${computerChoice}. You: ${userScore} - Computer: ${computerScore}`);
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      ++userScore;
      console.log(`You win! ${userChoice} beats ${computerChoice}. You: ${userScore} - Computer: ${computerScore}`);
    } else {
      ++computerScore;
      console.log(`You lose! ${computerChoice} beats ${userChoice}. You: ${userScore} - Computer: ${computerScore}`);
    }
  }

 
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
  playRound(getUserChoice(), getComputeChoice());
}


playGame();
