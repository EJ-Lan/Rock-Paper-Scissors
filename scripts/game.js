let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;
const choiceToEmoji = {
    "ROCK": "⛰️",
    "PAPER": "📝",
    "SCISSORS": "✂️"
};

const getComputerChoice = () => {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 0; // Tie
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
               || (playerSelection === "SCISSORS" && computerSelection === "PAPER")
               || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        return 1; // Player wins
    } else {
        return -1; // Computer wins
    }
};

const displayRoundResult = (playerSelection, computerSelection, result) => {
    let roundResult = document.querySelector('.round-results');
    roundResult.innerHTML = ''; // Clear previous results
    let resultText = document.createElement('p');
    resultText.textContent = `You chose ${choiceToEmoji[playerSelection]}, Computer chose ${choiceToEmoji[computerSelection]}. `;
    if (result === 0) resultText.textContent += 'It\'s a tie!';
    else if (result === 1) resultText.textContent += 'You win!';
    else resultText.textContent += 'You lose!';
    roundResult.appendChild(resultText);
};

const buttons = document.querySelectorAll('.selection-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (roundsPlayed >= totalRounds) return; // Stop if 5 rounds are played

        let playerSelection;
        switch (button.id) {
            case "rock-button":
                playerSelection = "ROCK";
                break;
            case "paper-button":
                playerSelection = "PAPER";
                break;
            case "scissor-button":
                playerSelection = "SCISSORS";
                break;
            default:
                playerSelection = null; // Handle unexpected cases
        }

        if (playerSelection) {
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);

            displayRoundResult(playerSelection, computerSelection, result);

            if (result === 1) userScore++;
            else if (result === -1) computerScore++;

            roundsPlayed++;
            updateScoreDisplay();

            if (roundsPlayed === totalRounds) {
                displayWinner();
                disableButtons();
            }
        }
    });
});

const updateScoreDisplay = () => {
    document.querySelector('#user-score').textContent = userScore;
    document.querySelector('#computer-score').textContent = computerScore;
};

const displayWinner = () => {
    let winnerText = document.createElement('p');
    if (userScore > computerScore) {
        winnerText.textContent = 'You Win!';
    } else if (userScore < computerScore) {
        winnerText.textContent = 'Computer Wins!';
    } else {
        winnerText.textContent = 'It\'s a Tie!';
    }
    document.querySelector('.winner').appendChild(winnerText);

    // Show play again modal
    document.getElementById('play-again-modal').style.display = 'block';
};

const disableButtons = () => {
    buttons.forEach(button => {
        button.disabled = true;
    });
};

document.getElementById('play-again-button').addEventListener('click', () => {
    resetGame();
});

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScoreDisplay();
    document.querySelector('.round-results').innerHTML = '';
    document.querySelector('.winner').innerHTML = '';
    buttons.forEach(button => {
        button.disabled = false;
    });
    document.getElementById('play-again-modal').style.display = 'none';
};

// Initialize scores
updateScoreDisplay();