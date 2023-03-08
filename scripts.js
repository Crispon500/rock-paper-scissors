let playerWinCount = 0;
let computerWinCount = 0;

//function to grab a random element from an array of "rock", "paper", and "scissors"
function getComputerChoice() {
    const randomElement = ["rock","paper","scissors"];
    return randomElement[Math.floor(Math.random() * randomElement.length)];
}

//function to prompt and return the player choice
function getPlayerChoice(){
    return "rock";
}

//function to compare and declare the winner between the user and computer
function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if(computerSelection == "rock"){
                result = "It's a tie";
            } else if(computerSelection == "paper")
            {  
                computerWinCount++;
                result = "How can you lose to a computer?";
            } else if(computerSelection == "scissors")
            {
                playerWinCount++;
                result = "You won!";
            } else{
                result = "somhow you broke the computer";
            }
            break;
        case "paper":
            if(computerSelection == "rock"){
                playerWinCount++;
                result = "You won!";
            } else if(computerSelection == "paper")
            {
                result = "It's a tie";
            } else if(computerSelection == "scissors")
            {
                computerWinCount++;
                result = "How can you lose to a computer?";
            } else{
                result = "somhow you broke the computer";
            }
            break;
        case "scissors":
        if(computerSelection == "rock"){
            computerWinCount++;
            result = "How can you lose to a computer?";
        } else if(computerSelection == "paper")
        {
            playerWinCount++;
            result = "You won!";
        } else if(computerSelection == "scissors")
        {
            result = "It's a tie";
        } else{
            result = "somhow you broke the computer";
        }
        break;
        default:
            result = "Insert a valid option";
            break;
    }
    return result;
}

//initiate the game
function game(){
    
    playerWinCount = 0;
    computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }

    return "Game Over: " + playerWinCount + " to " + computerWinCount;
}

console.log(game());