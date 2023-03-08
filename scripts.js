function getComputerChoice() {
    const randomElement = ["rock","paper","scissors"];
    return randomElement[Math.floor(Math.random() * randomElement.length)];
}

console.log(getComputerChoice());