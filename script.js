const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')

const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const computerChoice = document.querySelector('.computerChoice')

const result = document.querySelector('.result')

let choices = ['rock', 'paper', 'scissors']

let answer;
let userScore = 0;
let comScore = 0;

rockBtn.addEventListener('click', () => {
    answer = 1;
    result.textContent = ''
    playGame()
})

paperBtn.addEventListener('click', () => {
    answer = 2;
    result.textContent = ''
    playGame()
})

scissorsBtn.addEventListener('click', () => {
    answer = 3;
    result.textContent = ''
    playGame()
})

function playGame() {
    const computerAnswer = Math.floor(Math.random()*3)+1;
    computerChoice.textContent = computerAnswer;
    console.log(computerAnswer)
    
    if (answer === computerAnswer) {
        result.textContent = 'Tie!'
    } else if (answer === 1 && computerAnswer === 3 || answer === 2 && computerAnswer === 1 || answer === 3 && computerAnswer === 2) {
        result.textContent = 'You Win!'
        userScore++;
        playerScore.textContent = userScore;
    } else {
        result.textContent = 'You Lose!'
        comScore++;
        computerScore.textContent = comScore;
    }
}
