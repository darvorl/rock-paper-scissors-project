let humanScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const div = document.getElementById("results");

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.3) {
    choice = "scissors";
  } else if (choice < 0.6) {
    choice = "paper";
  } else {
    choice = "rock";
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper or scissors! ");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "paper")
  ) {
    div.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
  } else if (
    (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock") ||
    (computerChoice == "rock" && humanChoice == "paper")
  ) {
    div.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
  } else {
    div.textContent = `It's a draw! both chose ${humanChoice} and ${computerChoice}`;
  }

  if (humanScore === 5 || computerScore === 5) {
    scoreLog();
  }
}

function scoreLog() {
  div.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
}

rock.addEventListener("click", () => {
  playRound(rock.textContent, getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound(paper.textContent, getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound(scissors.textContent, getComputerChoice());
});


