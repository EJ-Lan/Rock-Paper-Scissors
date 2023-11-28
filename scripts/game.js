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

    return computerSelection;
}

let playRound = (playerSelection, computerSelection) => {

}