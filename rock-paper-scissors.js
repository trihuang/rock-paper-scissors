// A simple program that allows the user to play rock paper scissors against the computer from the console.

let choices = ['Rock', 'Paper', 'Scissors'];

// Gets the computer's choice of rock, paper, or scissors
function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

// Plays one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let playerSelectionRevised = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelectionRevised == computerSelection) {
        return "It's a tie!";
    } else if ((playerSelectionRevised == 'Rock') && (computerSelection == 'Paper')) {
        return "You Lose! Paper beats Rock!";
    } else if ((playerSelectionRevised == 'Rock') && (computerSelection == 'Scissors')) {
        return "You Win! Rock beats Scissors!";
    } else if ((playerSelectionRevised == 'Paper') && (computerSelection == 'Rock')) {
        return "You Win! Paper beats Rock!";
    } else if ((playerSelectionRevised == 'Paper') && (computerSelection == 'Scissors')) {
        return "You Lose! Scissors beat Paper!";
    } else if ((playerSelectionRevised == 'Scissors') && (computerSelection == 'Rock')) {
        return "You Lose! Rock beats Scissors!";
    } else if ((playerSelectionRevised == 'Scissors') && (computerSelection == 'Paper')) {
        return "You Win! Scissors beat Paper!";
    }
}

// Plays a game of five rounds of rock paper scissors, keeps score, and reports the winner
function game() {

}