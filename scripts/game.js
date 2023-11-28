let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    let computerSelection;

    switch (choice) {
        case 0:
            computerSelection = "Rock";
            break;
        case 1:
            computerSelection = "Paper";
            break;
        case 2:
            computerSelection = "Scissors";
            break;
    }

    return computerSelection.toUpperCase();
}

let getPlayerSelection = () => {
    let playerSelection; 
    let validSelection = false;

    while (!validSelection) {
        playerSelection = prompt("Enter Selection: ");
        switch (playerSelection.toUpperCase()) {
            case "ROCK":
                validSelection = true;
                break;
            case "PAPER":
                validSelection = true;
                break;
            case "SCISSORS":
                validSelection = true;
                break;
            default:
                console.log("Invalid Selection Try Again");
                break;
        }
    }

    return playerSelection.toUpperCase();
}

let playRound = (playerSelection, computerSelection) => {
    while (true) { 
        if (playerSelection === computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}. Choose again.`);
            playerSelection = getPlayerSelection();
            computerSelection = getComputerChoice();
        } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
            || (playerSelection === "SCISSORS" && computerSelection === "PAPER")
            || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            return true;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            return false;
        }
    }
}

let game = () => {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        let win = playRound(playerSelection, computerSelection)
        if (win) {
            userScore++;
        } else {
            computerScore++;
        }
    }

    if (userScore > computerScore) {
        console.log(`User Wins!`)
    } else {
        console.log(`Computer Wins`)
    }
}

game();