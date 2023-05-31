console.log("Let's play Rock, Paper Scissors!");

let playerScore = 0;
let compScore = 0;

game();

function getComputerChoice() {
    let choices = ["rock" , "paper" , "scissors"];
    let choiceNum = Math.floor(Math.random()*3);
    return choices[choiceNum];
}

function round(playerSelection, computerSelection) {
    lowerSelect = playerSelection.toLowerCase();

    if(lowerSelect==computerSelection) {
        return ["Tie game!", "tie"];
    }
    else if(lowerSelect=="rock" && computerSelection == "paper") {
        return ["You Lose! Paper beats Rock", "comp"];
    }
    else if(lowerSelect=="rock" && computerSelection == "scissors") {
        return ["You Win! Rock beats Scissors", "player"];
    }
    else if(lowerSelect=="paper" && computerSelection == "rock") {
        return ["You Win! Paper beats Rock","player"];
    }
    else if(lowerSelect=="paper" && computerSelection == "scissors") {
        return ["You Lose! Scissors beats paper","comp"];
    }
    else if(lowerSelect=="scissors" && computerSelection == "rock") {
        return ["You Lose! Rock beats Scissors","comp"];
    }
    else if(lowerSelect=="scissors" && computerSelection == "paper"){
        return ["You Win! Scissors beats Paper", "player"];
    }

    return ["ERROR: Invalid selection","none"];
}

function updateScore(pScore, cScore) {
    const playerScoreCard = document.querySelector('#player-score');
    const compScoreCard = document.querySelector('#comp-score');

    playerScoreCard.textContent = (pScore);
    compScoreCard.textContent = (cScore);
}

function playRound(e){
    if(playerScore === 5 || compScore === 5){
        playerScore = 0;
        compScore = 0;
    }
    let playerChoice = e.target.id;
    let compChoice = getComputerChoice();
    let info = document.querySelector('.info')
    
    let result = round(playerChoice,compChoice);
    if(result[1] == "player"){
        playerScore += 1;
    }
    else if (result[1] == "comp"){
        compScore += 1;
    }
    info.textContent = result[0];
    updateScore(playerScore,compScore);
    if(playerScore === 5){
        info.textContent = "You win the match! Select Rock, Paper, or Scissors to start a new match";
        return;
    }
    else if(compScore === 5){
        info.textContent = "You lose the match! Select Rock, Paper, or Scissors to start a new match";
        return;
    }
    else {
        return;
    }
}

function game() {
    const selections = document.querySelectorAll('.selection');
    selections.forEach(select => {
        select.addEventListener("click" , playRound)
    });
}