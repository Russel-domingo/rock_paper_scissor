// create a function the return rock paper or scissor

let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "its a tie";
    }

    //human wins
    if (humanChoice === 'rock' && computerChoice === "scissor" 
        || humanChoice === "scissor" && computerChoice === "paper" 
        || humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
    }
    
    if (computerChoice === 'rock' && humanChoice === "scissor" 
        || computerChoice === "scissor" && humanChoice === "paper" 
        || computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
    }
}
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }

    if (randomNumber === 1) {
        return "paper";
    }

    if (randomNumber === 2) {
        return "scissor";
    }
}

function getHumanChoice () {
    const humanChoice = prompt('Choice: rock, paper, or scissor');

    return humanChoice;
}


while (humanScore < 5 && computerScore < 5) {
    let humanChoice =getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
    console.log(humanChoice);
    console.log(computerChoice);
    
}

if (humanScore === 5) {
    alert('Human wins');
}

if (computerScore === 5) {
    alert('Computer wins');
}



