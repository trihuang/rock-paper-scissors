// A simple program that allows the user to play rock paper scissors against the computer.
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const choices = ['Rock', 'Paper', 'Scissors'];

const playerScoreBoard = document.querySelector('.player-score .rectangle');
const computerScoreBoard = document.querySelector('.computer-score .rectangle');
const result = document.querySelector('.subtext');

const resetButton = document.querySelector('.reset');

rock.addEventListener('click', function () {
    if (!isGameOver()) playRound('rock')
    else {
        result.textContent = "Please press the reset button to start another game.";
    };
});

paper.addEventListener('click', function() {
    if (!isGameOver()) playRound('paper')
    else {
        result.textContent = "Please press the reset button to start another game.";
    };
});

scissors.addEventListener('click', function() {
    if (!isGameOver()) playRound('scissors')
    else {
        result.textContent = "Please press the reset button to start another game.";
    };
});

resetButton.addEventListener('click', function() {
    result.textContent = "Play against the computer! The first to get 5 points wins!";
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
    playerScore = 0;
    computerScore = 0;
});

// Gets the computer's choice of rock, paper, or scissors
function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

// Plays one round of rock paper scissors
function playRound(playerSelection) {
    let computerSelection = getComputerChoice(choices);
    let playerSelectionRevised = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelectionRevised == computerSelection) {
        result.textContent = "It's a tie!";
    } else if ((playerSelectionRevised == 'Rock') && (computerSelection == 'Paper')) {
        result.textContent = "You Lose! The computer chose Paper!";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else if ((playerSelectionRevised == 'Rock') && (computerSelection == 'Scissors')) {
        result.textContent = "You Win! The computer chose Scissors!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    } else if ((playerSelectionRevised == 'Paper') && (computerSelection == 'Rock')) {
        result.textContent = "You Win! The computer chose Rock!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    } else if ((playerSelectionRevised == 'Paper') && (computerSelection == 'Scissors')) {
        result.textContent = "You Lose! The computer chose Scissors!";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else if ((playerSelectionRevised == 'Scissors') && (computerSelection == 'Rock')) {
        result.textContent = "You Lose! The computer chose Rock!";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else if ((playerSelectionRevised == 'Scissors') && (computerSelection == 'Paper')) {
        result.textContent = "You Win! The computer chose Paper!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }

    if (playerScore == 5) {
        result.textContent = "Congratulations! You are the winner!";
    } else if (computerScore == 5) {
        result.textContent = "The computer is the winner!"
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

function isGameOver() {
    return (playerScore == 5 || computerScore == 5);
}
