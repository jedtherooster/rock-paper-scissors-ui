const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')

const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const computerChoice = document.querySelector('.computerChoice')

const playAgain = document.createElement('button')

const result = document.querySelector('.result')
const playAgainBtn = document.querySelector('.playAgain')

let answer;
let userScore = 0;
let comScore = 0;
let playing = true;

rockBtn.addEventListener('click', () => {
    answer = 'rock';
    playGame()
})
    
paperBtn.addEventListener('click', () => {
    answer = 'paper';
    playGame()
})
    
scissorsBtn.addEventListener('click', () => {
    answer = 'scissors';
    playGame()
})
    
function playGame() {
    if (!playing) return;
    result.textContent = ''
    const choices = ['rock', 'paper', 'scissors']
    const computerAnswer = choices[Math.floor(Math.random()*3)];

    console.log(computerAnswer)
        
    if (answer === computerAnswer) {
        result.textContent = 'Tie!'
        computerChoice.textContent = computerAnswer;
    } else if (answer === 'rock' && computerAnswer === 'scissors' || answer === 'paper' && computerAnswer === 'rock' || answer === 'scissors' && computerAnswer === 'paper') {
        result.textContent = 'You Win!'
        userScore++;
        playerScore.textContent = userScore;
        computerChoice.textContent = computerAnswer;
        if (userScore >= 5) {
            gameWin();
            playing = false;
        }
    } else {
        result.textContent = 'You Lose!'
        comScore++;
        computerScore.textContent = comScore;
        computerChoice.textContent = computerAnswer;
        if (comScore >= 5) {
            gameLoss();
            playing = false;
        }
    }
}


function gameLoss() {
    result.textContent = `You Lost! Scores were. User: ${userScore} Computer: ${comScore}`
}

function gameWin() {
    result.textContent = `You Won! Scores were. User: ${userScore} Computer: ${comScore}`
}



// TODO
// Add Font
// Make website look nicer
