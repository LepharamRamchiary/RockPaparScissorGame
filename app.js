const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoicedisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
 userChoice = e.target.id
 userChoicedisplay.innerHTML = userChoice
 generateComputerChoice()
 grtResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 ) + 1//or u can use possibleChoice.length
    console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function grtResult() {
    if (computerChoice === userChoice){
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win'
    }
    resultDisplay.innerHTML = result
}