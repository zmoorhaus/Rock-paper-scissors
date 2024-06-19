console.log("hello0000 world")

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("This computer chose fuckin' " + computerChoice)
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if ((humanChoice === "rock") || (humanChoice === "paper") || (humanChoice === "scissors")) {
        console.log ("Your choice was " + humanChoice);
        return humanChoice;
    } else {  
        alert("nah dawg");
    }
}

function playRound(humanChoice, ComputerChoice) {
   if (humanChoice === ComputerChoice) {
    console.log("HOLY SHIT IT'S A TIE"); 
    alert("fuck, they also chose that... it's a tie lmao")
   } else if ((humanChoice === "rock") && (ComputerChoice === "paper") || (humanChoice === "paper") && (ComputerChoice === "scissors") 
   || (humanChoice === "scissors") && (ComputerChoice === "rock")) {
    computerScore ++;
    console.log("Computer Score is " + (computerScore ++));
    console.log("you lost bitch lmao"); 
    alert("you lost bitch lmao")  
   } else if ((humanChoice === "rock") && (ComputerChoice === "scissors") || (humanChoice === "paper") && (ComputerChoice === "rock") || (humanChoice === "scissors") && (ComputerChoice === "paper")) {
    humanScore ++;
    console.log("DAMN dude, you are a FUCKING champion")
    console.log("Your score is " + (humanScore ++))
    alert("YOU WIN HELL YEAH");
   }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {

}







// when the user inputs 'rock'
// generate a random response of 'rock', 'paper' or 'scissors'
// if response is 'rock', print 'draw'
// if output is 'paper', print 'lose' 
// if output is 'scissors', print win

// when the user inputs 'paper'
// generate a random response of 'rock', 'paper' or 'scissors'
// if response is 'rock', print 'win'
// if output is 'paper', print 'draw' 
// if output is 'scissors', print 'lose'

// when the user inputs 'scissors'
// generate a random response of 'rock', 'paper' or 'scissors'
// if response is 'rock', print 'lose'
// if output is 'paper', print 'win' 
// if output is 'scissors', print 'draw; 