let playerScore = 0;
let compScore = 0;

//add event listeners for each button
const selections = document.querySelectorAll('.selection');
selections.forEach(select => {
    select.addEventListener("click" , playRound)
});

//selects a random rps choice for the computer
function getComputerChoice() {
    let choices = ["rock" , "paper" , "scissors"];
    let choiceNum = Math.floor(Math.random()*3);
    return choices[choiceNum];
}

//determines winner based on the player's and computer's rps selection
//returns an array where the first element is the text result, 
//and the second is a string naming the winner or a tie
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

//clears text and button border from previous selections
function clearText(){
    const buttonTexts = document.querySelectorAll(".button-text");
    const buttons = document.querySelectorAll(".selection");
    buttonTexts.forEach(text =>
        text.textContent = ""
    )
    buttons.forEach(b =>
        b.style.border = ""
    )
}

//adds text and a border to a button indicating player selection
function highlightPlayerSelection(pSelect) {
    const playerSelect = document.querySelector(`#${pSelect}-text`);
    const playerButton = document.querySelector(`#${pSelect}`);
    playerSelect.textContent = "You selected\n";
    playerButton.style.border = "3px inset blue";
}


//adds text and a border to a button indicating computer selection
//also adds text and border if both player and computer selected
//the same rps selection
function highlightCompSelection(cSelect) {
    const compSelect = document.querySelector(`#${cSelect}-text`);
    const compButton = document.querySelector(`#${cSelect}`);
    if(compSelect.textContent === "")
        compSelect.textContent ="Computer selected";
    else
        compSelect.textContent ="Player and Computer selected";
    if(compButton.style.border === "")
        compButton.style.border = "3px inset red";
    else
        compButton.style.border = "3px inset purple";
}

//updates score text based on current score
function updateScore(pScore, cScore) {
    const playerScoreCard = document.querySelector('#player-score');
    const compScoreCard = document.querySelector('#comp-score');

    playerScoreCard.textContent = (pScore);
    compScoreCard.textContent = (cScore);
}

//plays a round based on player and computer choice
//declares winner if one reaches a score of 5
//resets scores if previous match is over
function playRound(e){
    if(playerScore === 5 || compScore === 5){
        playerScore = 0;
        compScore = 0;
    }
    let playerChoice = e.target.id;
    let compChoice = getComputerChoice();
    clearText();
    highlightPlayerSelection(playerChoice);
    highlightCompSelection(compChoice);
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