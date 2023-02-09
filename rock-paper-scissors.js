// A simple program that allows the user to play rock paper scissors against the computer.

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const choices = ['Rock', 'Paper', 'Scissors'];


// Gets the computer's choice of rock, paper, or scissors
function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

// Plays one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let playerSelectionRevised = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelectionRevised == computerSelection) {
        console.log("It's a tie!");
        return -1;
    } else if ((playerSelectionRevised == 'Rock') && (computerSelection == 'Paper')) {
        console.log("You Lose! Paper beats Rock!");
        return 0;
    } else if ((playerSelectionRevised == 'Rock') && (computerSelection == 'Scissors')) {
        console.log("You Win! Rock beats Scissors!");
        return 1;
    } else if ((playerSelectionRevised == 'Paper') && (computerSelection == 'Rock')) {
        console.log("You Win! Paper beats Rock!");
        return 1;
    } else if ((playerSelectionRevised == 'Paper') && (computerSelection == 'Scissors')) {
        console.log("You Lose! Scissors beat Paper!");
        return 0;
    } else if ((playerSelectionRevised == 'Scissors') && (computerSelection == 'Rock')) {
        console.log("You Lose! Rock beats Scissors!");
        return 0;
    } else if ((playerSelectionRevised == 'Scissors') && (computerSelection == 'Paper')) {
        console.log("You Win! Scissors beat Paper!");
        return 1;
    }
}

// Plays a game of five rounds of rock paper scissors, keeps score, and reports the winner
function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(choices);
        let playerSelection = prompt("Pick Rock, Paper, or Scissors:");
        let roundOutcome = playRound(playerSelection, computerSelection);
        
        if (roundOutcome == 0) {
            computerScore++;
        } else if (roundOutcome == 1) {
            playerScore++;
        }
    }

    if (playerScore == computerScore) {
        console.log("It's a tie!");
    } else if (playerScore > computerScore) {
        console.log("You are the winner!");
    } else {
        console.log("The computer is the winner!");
    }
}

//game();