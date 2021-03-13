'use strict';
// selecting the elements --->
const scor0El = document.querySelector('#score--0');
const scor1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// game starting point --->
let scores, currentScore, activePlayer,playing;

const inIt = function(){
     scores = [0,0]
     currentScore = 0;
     activePlayer = 0;
     scor0El.textContent = 0;
     scor1El.textContent = 0;
     playing = true;
    

    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    diceEl.classList.add('hidden');
    
}
inIt();


const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore =0;
    activePlayer = activePlayer === 0 ? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
diceEl.classList.add('hidden');

// rolling the dice --->

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');




btnRoll.addEventListener('click', function(){
    if (playing){  
    const dice = Math.floor(Math.random() * 6) +1 ;

    // display dice --->
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${dice}.png`

    // check for roll 1 --->
    if (dice !== 1){ 

        // add to cuurent score --->
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        
    }
    else {
        // switch to next player --->
       switchPlayer();
       
    }
}
})

// holding part --->


btnHold.addEventListener('click', function(){
    if(playing){
    // add current score to active player;s score ---> 
    scores[activePlayer] += currentScore;

    // display score --->
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    // check if score >= 100 -->
    if (scores[activePlayer] >= 20){
        playing = false;
        diceEl.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }

    else{

        // switch the player --->
        switchPlayer();
    }
    }
})

btnNew.addEventListener('click', inIt);

   

