/* Declaring values and targeting id's in the html file*/
const userInputDisplay = document.getElementById('user-input')
const cpuInputDisplay = document.getElementById('cpu-input')
const resultsDisplay = document.getElementById('result')

const gameplay = document.querySelectorAll('button')
let userInput
let cpuInput
let results

/* Establish the 'click' actions that will take place and register the input and display it on screen */
gameplay.forEach(gameplay => gameplay.addEventListener('click', (c) => {
    userInput = c.target.id
    userInputDisplay.innerHTML = userInput
    generateCpuInput()
    result()
}))
/* Establishing the random generation input by the conputer that takes place after the 'click' by the user */
function generateCpuInput() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        cpuInput = 'rock'
    }
    if (randomNumber === 2) {
        cpuInput = 'paper'
    }
    if (randomNumber === 3) {
        cpuInput = 'scissors'
    }
    cpuInputDisplay.innerHTML = cpuInput
}
/* This establihses the game rules and sets the setting of what beats what. Rock over scissors and paper over rock for example */
function result() {
    if (cpuInput === userInput) {
        results = 'What! A Draw?!'
    }


    if (cpuInput === 'rock' && userInput === 'paper') {
        results = 'Victory!'
    }
    if (cpuInput === 'rock' && userInput === 'scissors') {
        results = 'How Could I Lose?!'
    }


    if (cpuInput === 'paper' && userInput === 'scissors') {
        results = 'Victory!'
    }
    if (cpuInput === 'paper' && userInput === 'rock') {
        results = 'How Could I Lose?!'
    }


    if (cpuInput === 'scissors' && userInput === 'rock') {
        results = 'Victory!'
    }
    if (cpuInput === 'scissors' && userInput === 'paper') {
        results = 'How Could I Lose?!'
    }
    resultsDisplay.innerHTML = results
}

// Pseudo Code // 
// 1. The game loads and any animations plays but no gameplay is triggered until user input is detected
// 2. Once user input is detected (user selects rock, paper, or scissors) Javascript will register the input as the user's choice and 
            // randomly select an option for the CPU choice 
// 3. The two inputs will then be compared to one another
        // CPU = User - its a tie
        // CPU > User - Lose 
        // CPU < User - Win 
        // Rock beats scissors, scissors beats paper, paper beats rock
// 4. The results simply generate but adding in the html display will show the results on the targeted 'id' 