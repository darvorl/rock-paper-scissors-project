let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random()
    if (choice < 0.3) {
        choice = "scissors"
    } else if (choice < 0.6) {
        choice = "paper"
    } else {
        choice = "rock"
    }
    return choice
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors! ")
    return choice
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "paper" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "rock") || 
    (humanChoice == "rock" && computerChoice == "paper")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1;
    } else if ((computerChoice == "paper" && humanChoice == "scissors") || 
    (computerChoice == "scissors" && humanChoice == "rock") || 
    (computerChoice == "rock" && humanChoice == "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1;
    } else {
        console.log(`It's a draw!`)
    }
}

function playGame() {
   playRound(getHumanChoice().toLowerCase(), getComputerChoice());
   playRound(getHumanChoice().toLowerCase(), getComputerChoice());
   playRound(getHumanChoice().toLowerCase(), getComputerChoice());
   playRound(getHumanChoice().toLowerCase(), getComputerChoice());
   playRound(getHumanChoice().toLowerCase(), getComputerChoice());
   console.log(`Human score: ${humanScore}`)
   console.log(`Computer score: ${computerScore}`)
}

playGame();