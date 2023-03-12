let playerWinCount = 0;
let computerWinCount = 0;

//create a reset button
const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.id = "reset";

//create actions for the button choices
const castRock = document.querySelector('#rock');
castRock.onclick = () => playRound("rock",getComputerChoice());
const castPaper = document.querySelector("#paper");
castPaper.onclick = () => playRound("paper",getComputerChoice());
const castScissors = document.querySelector("#scissors")
castScissors.onclick = () => playRound("scissors",getComputerChoice());
resetButton.onclick = () => resetGame();

//used for placing the different action buttons
const buttonContainer = document.querySelector("#button-container");

//function to grab a random element from an array of "rock", "paper", and "scissors"
function getComputerChoice() {
    const randomElement = ["rock","paper","scissors"];
    return randomElement[Math.floor(Math.random() * randomElement.length)];
}

//function to check the status of the game
function checkStatus() {
    if(playerWinCount === 5){
        updateScoreBoard()
        removeCastButtons();
        updateAnnouncementBoard("You won the game!!!");
    }
    else if(computerWinCount === 5){
        updateScoreBoard();
        removeCastButtons();
        updateAnnouncementBoard("The computer wins. As expected.");
    }
}
//this is to remove the Rock Paper Scissors buttons when the game is over and also adds the reset button
function removeCastButtons(){
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    buttonContainer.append(resetButton);
}

function addCastButtons(){
    buttonContainer.append(castRock)
    buttonContainer.append(castPaper)
    buttonContainer.append(castScissors)
    document.getElementById("reset").remove();
}

//function to reset the game
function resetGame(){
    playerWinCount = 0;
    computerWinCount = 0;
    updateScoreBoard();
    addCastButtons();
}

//updates the announcement board text
function updateAnnouncementBoard(text){
    document.getElementById("announcement-board").innerText = text;
}

//updates the scoreboard for computer and player
function updateScoreBoard() {
    document.getElementById("computer-score").innerText = "Computer: " + computerWinCount;
    document.getElementById("player-score").innerText = "Player: "+ playerWinCount;
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