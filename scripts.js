console.log("Hello World!")

function getComputerChoice() {
    let choices = ["rock" , "paper" , "scissors"];
    let choiceNum = Math.floor(Math.random()*3);
    return choices[choiceNum];
}

function round(playerSelection, computerSelection) {
    lowerSelect = playerSelection.toLowerCase();

    if(lowerSelect==computerSelection) {
        return "Tie game!";
    }
    else if(lowerSelect=="rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if(lowerSelect=="rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if(lowerSelect=="paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    }
    else if(lowerSelect=="paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats paper";
    }
    else if(lowerSelect=="scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if(lowerSelect=="scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    }

    return "ERROR: Invalid selection";
}