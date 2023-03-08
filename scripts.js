const playerWinCount = 0;
const computerWinCount = 0;

//function to grab a random element from an array of "rock", "paper", and "scissors"
function getComputerChoice() {
    const randomElement = ["rock","paper","scissors"];
    return randomElement[Math.floor(Math.random() * randomElement.length)];
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
                result = "How can you lose to a computer?";
            } else if(computerSelection == "scissors")
            {
                result = "You won!";
            } else{
                result = "somhow you broke the computer";
            }
            break;
        case "paper":
            if(computerSelection == "rock"){
                result = "You won!";
            } else if(computerSelection == "paper")
            {
                result = "It's a tie";
            } else if(computerSelection == "scissors")
            {
                result = "How can you lose to a computer?";
            } else{
                result = "somhow you broke the computer";
            }
            break;
        case "scissors":
        if(computerSelection == "rock"){
            result = "How can you lose to a computer?";
        } else if(computerSelection == "paper")
        {
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

function game(){
    const playerSelection ="scissors";
    const computerSelection = getComputerChoice();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    return "Game Over";
}

console.log(game());