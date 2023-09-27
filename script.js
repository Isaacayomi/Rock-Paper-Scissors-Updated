let playerMove = " ";
let computerMove = " ";

// Gets the score stored in local storage after being converted back into an object using the JSON.parse function
let score = JSON.parse(localStorage.getItem('gameScore'));

score === null ? score = {
    Wins: 0, Losses: 0, Ties: 0
} : null;
//Generates random computer mmove
function randomGame() {
    let randomMove = Math.random();
    if (randomMove > 0 / 3 && randomMove <= 1 / 3) {
        computerMove = "Rock"
    } else if (randomMove > 1 / 3 && randomMove <= 2 / 3) {
        computerMove = "Paper"
    } else {
        computerMove = "Scissors"
    }
};

//Rock function
function playGame(playerGame) {
    randomGame()
    let result = " ";
    if (playerGame === 'Rock') {
        if (computerMove === "Rock") {
            result = `You Tie`
        } else if (computerMove === "Paper") {
            result = `You lose`;
        } else {
            result = `You win`;
        };
        document.querySelector('.choiceDisplay').innerHTML = `You
        <img src="/img/${playerGame}-emoji.png"> - Computer <img src="/img/${computerMove}-emoji.png">`;
        document.querySelector('.displayResult').innerText = `${result}`
    } else if (playerGame === 'Paper') {
        if (computerMove === "Rock") {
            result = "You win"
        } else if (computerMove === "Paper") {
            result = "You Tie"
        } else {
            result = "You lose"
        };

        document.querySelector('.choiceDisplay').innerHTML = `You
         <img src="/img/${playerGame}-emoji.png"> - Computer <img src="/img/${computerMove}-emoji.png">`;
        document.querySelector('.displayResult').innerText = `${result}`
    } else if (playerGame === 'Scissors') {
        if (computerMove === "Rock") {
            result = "You lose"
        } else if (computerMove === "Paper") {
            result = "You win"
        } else {
            result = "You Tie"
        };

        document.querySelector('.choiceDisplay').innerHTML = `You
         <img src="/img/${playerGame}-emoji.png"> - Computer <img src="/img/${computerMove}-emoji.png">`;
        document.querySelector('.displayResult').innerText = `${result}`
    }


    //Result function
    if (result === "You Tie") {
        score.Ties++
    } else if (result === "You lose") {
        score.Losses++
    } else if (result === "You win") {
        score.Wins++
    };
    //Displays result
    document.querySelector('.displayScore').innerText = `Wins : ${score.Wins} Losses : ${score.Losses} Ties : ${score.Ties}`;
    localStorage.setItem("gameScore", JSON.stringify(score));
};

function reset() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;

    localStorage.removeItem('gameScore')

    document.querySelector('.displayScore').innerText = `Wins : ${score.Wins}  Losses : ${score.Losses}  Ties : ${score.Ties}`;
    document.querySelector('.choiceDisplay').innerText = null;
    document.querySelector('.displayResult').innerText = null;
};

/*
//working on the keyup event listener
function displayText(){
    let inputValue = document.querySelector('.input').value;
    let displayOutput = document.querySelector('.display_text');
    displayOutput.innerText = inputValue;
} */