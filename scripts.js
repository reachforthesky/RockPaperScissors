console.log("Let's play Rock, Paper Scissors!");

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

function game() {
    let i = 0;
    let playerScore = 0;
    let compScore = 0;
    while(i < 5) {
        let playerChoice = prompt("Pick Rock, Paper, or Scissors");
        let compChoice = getComputerChoice();
        let result = round(playerChoice,compChoice);
        if(result[1] == "player"){
            playerScore += 1;
        }
        else if (result[1] == "comp"){
            compScore += 1;
        }
        else if (result == "none"){
            i--;
        }
        console.log(result[0]);
        i++;
    }
    if(playerScore > compScore){
        console.log("You win the match!");
    }
    else if(playerScore < compScore){
        console.log("You lose the match.");
    }
    else {
        console.log("Tie match.");
    }
}