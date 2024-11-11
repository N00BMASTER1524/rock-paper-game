let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to update the score display
function updateScore() {
    document.getElementById('score').textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

// Function to play a round of the game
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const resultsDiv = document.getElementById('results');

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScore();

    if (humanScore === 5) {
        resultsDiv.textContent = 'Congratulations! You won the game!';
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.textContent = 'The computer won the game!';
        disableButtons();
    }
}

// Disable buttons after the game ends
function disableButtons() {
    document.getElementById('rockButton').disabled = true;
    document.getElementById('paperButton').disabled = true;
    document.getElementById('scissorsButton').disabled = true;
}

// Add event listeners to the buttons
document.getElementById('rockButton').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

document.getElementById('paperButton').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

document.getElementById('scissorsButton').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});
