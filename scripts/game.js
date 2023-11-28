let getComputerChoice = () => {
    choice = Math.floor(Math.random() * 3);

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
    let playerSelection = prompt("Enter Selection: ");

    let validSelection = false;

    while (!validSelection) {
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
        }
    }

    return playerSelection.toUpperCase();

}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();

let playRound = (playerSelection, computerSelection) => {
    let tie = false;

    while (!tie) {
        if (playerSelection === "ROCK" && computerSelection) {
            
        }
    }
}