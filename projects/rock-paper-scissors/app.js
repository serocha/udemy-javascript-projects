//Basic rock/paper/scissors game
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICES = [ROCK, PAPER, SCISSORS];
const RESULT_DRAW = 'DRAW';
const RESULT_WIN = 'YOU WIN';
const RESULT_LOSE = 'YOU LOSE';
let defaultChoice;
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
            defaultChoice = DEFAULT_CHOICES[Math.floor(Math.random()*DEFAULT_CHOICES.length)];
            alert(`Invalid choice! We chose ${defaultChoice} for you!`);
            return defaultChoice;
        }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (compChoice, playerChoice) => {
    if (compChoice === playerChoice) {
        return RESULT_DRAW;
    } else if (
        compChoice === ROCK && playerChoice === PAPER ||
        compChoice === PAPER && playerChoice === SCISSORS ||
        compChoice === SCISSORS && playerChoice === ROCK
    ) {
        return RESULT_WIN;
    } else {
        return RESULT_LOSE;
    }
}

startGameBtn.addEventListener('click', startGame = () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice)
    let message = `You picked ${playerChoice} and the computer picked ${computerChoice}.`;
    if (winner === RESULT_DRAW) {
        message = message + ` It's a draw!`;
    } else if (winner === RESULT_WIN) {
        message = message + ' You won!';
    } else {
        message = message + ' The computer wins!';
    }

    alert(message);
    gameIsRunning = false;
}); // Consider giving anonymous functions a name to make debugging a bit easier