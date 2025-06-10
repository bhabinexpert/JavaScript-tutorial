let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const value = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter the valid Number")
    }else if(guess<1){
        alert("Please enter the number more than zero")
    }else if(guess > 100){
        alert("Please enter the number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessed it rigth..")
        endGame()
    }else if( guess < randomNumber){
        displayMessage("Your Guess is lower then the random number")
    }else if ( guess > randomNumber){
        displayMessage("Your Guess is higher then the random number")
    }

}

function displayGuess(guess){
    userInput.value=''
    guesses.innerHTML+= `${guess}:`
    numGuess++
    result.innerHTML = `${10 - numGuess}`

}


function displayMessage(message){
    value.innerHTML = `<h2> ${message} </h2>`

}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML= `<h2 id = "newGame">Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess= []
    numGuess = 1
    guesses.innerHTML = ''
    result.innerHTML = `${11- numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true 

   });
};
