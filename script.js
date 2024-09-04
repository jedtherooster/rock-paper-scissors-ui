const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')

const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const computerChoice = document.querySelector('.computerChoice')

const result = document.querySelector('.result')

let answer;
let userScore = 0;
let comScore = 0;

rockBtn.addEventListener('click', () => {
    answer = 'rock';
    result.textContent = ''
    playGame()
})

paperBtn.addEventListener('click', () => {
    answer = 'paper';
    result.textContent = ''
    playGame()
})

scissorsBtn.addEventListener('click', () => {
    answer = 'scissors';
    result.textContent = ''
    playGame()
})

function playGame() {
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
    } else {
        result.textContent = 'You Lose!'
        comScore++;
        computerScore.textContent = comScore;
        computerChoice.textContent = computerAnswer;
    }
}


// TODO
// Add Font
// Make website look nicer
