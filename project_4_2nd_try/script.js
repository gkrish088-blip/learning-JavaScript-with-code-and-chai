let num = Math.floor((Math.random()*100 ) +1) // a random number between 1 and 100 
const userInput = document.querySelector('#userGuess')
const submit = document.querySelector('#submit_button')
const guessSlot = document.querySelector('#param1')
const remaining = document.querySelector('#param2')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.parameters')

const p = document.createElement('p');

let guesses = []
let count = 1 
let playgame = true 

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){alert('Please enter a valid number')}
    else if(guess < 1){alert('Please enter a number greater than 1 ')}
    else if ( guess > 100){alert('Please enter a number less than 100 ')}
    else{
        guesses.push(guess)
        if(count === 2){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${num}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === num){
        displayMessage('You guessed it right')
        endGame()
    }else if(guess < num ){
        displayMessage('Number is too low ')
    } else if(guess > num ){
        displayMessage('Number is too high ')
    }
}

function displayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess} |  `
    count++
    remaining.innerHTML = `${ 11 - count}`
     
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}



function endGame (){
    playgame = false;
    userInput.value = ''
    userInput.setAttribute('disabled' ,'')
    p.classList.add('button')
    p.innerHTML=`<h2 id ='newgame'> New Game </h2>`;
    startOver.appendChild(p)
    newGame()
    
}
function newGame(){
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click',function(e){
        guesses =[]
        count = 1
        num = Math.floor((Math.random()*100 ) +1) 
        guessSlot.innerHTML = ''
        remaining.innerHTML = 10
        playgame = true
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
    })
    
}