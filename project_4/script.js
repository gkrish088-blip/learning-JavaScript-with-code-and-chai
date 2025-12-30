const num = Math.floor((Math.random()*100) + 1) //random number between 1 and 100
let previous_guesses =[];
let param1 = document.querySelector('#param1')
param1.innerHTML = previous_guesses
let guess_remaining =10;
let param2 = document.querySelector('#param2')
param2.innerHTML = guess_remaining
console.log(num);
const result = document.querySelector(".result")

const form = document.querySelector('form')

form.addEventListener('submit',function (e){
    e.preventDefault()
    const guess = parseInt(document.querySelector('#input').value)
    console.log(guess)
    if(guess < 0 || isNaN(guess)|| guess === ''){result.innerHTML = "Please enter a valid number between 1 and 100"}
    else{
        if(guess === num ){result.innerHTML = 'Wow congratulations , you guessed it right ';}
        else{
            if(previous_guesses.length <11){
            previous_guesses.push(guess);
            param1.innerHTML = previous_guesses;
            guess_remaining--;
            param2.innerHTML = guess_remaining
            result.innerHTML = "Wrong guess! Try again"} 
            else{result.innerHTML = 'Limit reached'}
        }
    }
    

})

