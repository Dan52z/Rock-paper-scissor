// computer's choice
function getComputerChoice() {
    let val=Math.floor(Math.random()*3);
    if (val == 0) {
        return 'R';
    }
    else if (val == 1){
        return 'P';
    }
    else return 'S';

}
//let compu=getComputerChoice();
//console.log(compu);

// player's choice
function getHumanChoice() {
    let rep=prompt("enter R, S or P :");
    return rep;
}
//let human=getHumanChoice();
//console.log(human);

let humanScore=0;
let computerScore=0;

// Logic of a playround
function playround(humanSelection, computerSelection) {
    if (humanSelection =='R') {
        if (computerSelection == "S") {
            console.log ("You won, Rock beats Scissor");
            humanScore++;
        }
        else if (computerSelection == 'P') {
            console.log("You lost, Paper beats Rock");
            computerScore++;
        }
        else {
            console.log("Draw!");
        }
    } 
    if (humanSelection == 'P') {
        if (computerSelection == 'R') {
            console.log("You won, Paper beats Rock");
            humanScore++;
        }
        else if (computerSelection == 'S') {
            console.log("You lost, Scissor beats Paper");
            computerScore++;
        }
        else {
            console.log("Draw!");
        }
    }
    if (humanSelection == 'S') {
        if (computerSelection == 'P') {
            console.log("You won, Scissor beats Paper");
            humanScore++;   
        }
        else if (computerSelection == 'R') {
            console.log("you lost, Rock beats Scissor");
            computerScore++;
        }
        else {
            console.log("Draw!");
        }
    }
}
let compu;
let human;
let manche;
function playgame() {
    for(let i=0 ; i<5 ; i++) {
        compu=getComputerChoice();
        human=getHumanChoice();
        manche=playround(human, compu);
        console.log(manche);
    }
}
playgame();
console.log(`The final score is, You: ${humanScore} and computer: ${computerScore}`);