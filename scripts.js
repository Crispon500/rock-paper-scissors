let playerWinCount = 0;
let computerWinCount = 0;

//create actions for the button choices
const castRock = document.querySelector('#rock');
castRock.onclick = () => playRound("rock",getComputerChoice());
const castPaper = document.querySelector("#paper");
castPaper.onclick = () => playRound("paper",getComputerChoice());
const castScissors = document.querySelector("#scissors")
castScissors.onclick = () => playRound("scissors",getComputerChoice());

//used for placing the reset button
const buttonContainer = document.querySelector("#button-container");

//create a reset button
const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.id = "reset;"

//function to grab a random element from an array of "rock", "paper", and "scissors"
function getComputerChoice() {
    const randomElement = ["rock","paper","scissors"];
    return randomElement[Math.floor(Math.random() * randomElement.length)];
}

//function to check the status of the game
function checkStatus() {
    if(playerWinCount === 5){
        document.getElementById("player-score").innerText = "Player: "+ playerWinCount;
        removeCastButtons();
        updateAnnouncementBoard("You won the game!!!");
    }
    else if(computerWinCount === 5){
        document.getElementById("computer-score").innerText = "Computer: " + computerWinCount;
        removeCastButtons();
        updateAnnouncementBoard("Why do you suck so much. Looks like you lost for good.");
    }
}
//this is to remove the Rock Paper Scissors buttons when the game is over and also adds the reset button
function removeCastButtons(){
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    buttonContainer.append(resetButton);
    
}

function resetGame(){
    playerWinCount = 0;
    computerWinCount = 0;
}

function updateAnnouncementBoard(text){
    document.getElementById("announcement-board").innerText = text;
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
                result = "You win this round.";
            } else{
                result = "somhow you broke the computer";
            }
            break;
        case "paper":
            if(computerSelection == "rock"){
                playerWinCount++;
                result = "You win this round.";
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
            result = "You win this round.";
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
    updateAnnouncementBoard(result);
    checkStatus();
    document.getElementById("player-score").innerText = "Player: "+ playerWinCount;
    document.getElementById("computer-score").innerText = "Computer: " + computerWinCount;
}