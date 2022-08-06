// function displayCompChoice() {
//   document.getElementById("CompChoice").innerHTML = "Hello World!";
// }
// function DisplayCompChoice();

// let playerSelection;

// function getUserChoice(userChoice) {
//   playerSelection = userChoice;
// }
// playerSelection = userChoice;
// console.log(playerSelection);

let computerSelection;
let playerSelection;
let wins;
let winsCal;
let computerWins;
let playerWins;


// This only takes computers choice once 
function getComputerChoice() {
  let myArray = ["rock", "paper", "scissors"];

  let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  return randomItem;
}

computerSelection = getComputerChoice();
console.log("Computer Choose " + computerSelection);


//This takes player input only once through prompt
getPlayerChoice = prompt("What's your Move");
playerSelection = getPlayerChoice.toLowerCase();
console.log("You Choose " + playerSelection);

// The actual game played once
function playRound() {
  if (playerSelection == "rock") {
    switch (playerSelection == "rock") {
      case computerSelection == "rock":
        return "Its a draw ";
        break;
      case computerSelection == "paper":
        return "You Lose , Paper beats Rock";
        break;
      case computerSelection == "scissors":
        return "You Win , Rock beats Scissor";
        break;
      default:
        return "Put a valid entry";
    }
  } else if (playerSelection == "paper") {
    switch (playerSelection == "paper") {
      case computerSelection == "paper":
        return "Its a draw ";
        break;
      case computerSelection == "rock":
        return "You Win , Paper beats Rock";
        break;
      case computerSelection == "scissors":
        return "You Lose , Scissors beats Paper";
        break;
      default:
        return "Put a valid entry";
    }
  } else if (playerSelection == "scissors") {
    switch (playerSelection == "scissors") {
      case computerSelection == "scissors":
        return "Its a draw ";
        break;
      case computerSelection == "rock":
        return "You Lose , Rock beats Scissors";
        break;
      case computerSelection == "paper":
        return "You Win , Scissors beats Paper";
        break;
      default:
        return "Put a valid entry";
    }
  }
}
wins = playRound();
console.log(wins);

let calculate = wins.split(" ");
let secondWord = calculate[1];

function winCalc() {
  let playa = 0;
  let computa = 0;
  for (i = 0; i < 5; i++) {

    function playRound();
    if (secondWord == "Win") {
      playa++;
    } else if (secondWord == "Lose") {
      computa++;
    } else if (secondWord == "a") {
      i--;
    }
  }
  if (playa > computa) {
    return "You Win the Game !";
  } else {
    return " Computer Wins the Game";
  }
}
console.log(winCalc());
