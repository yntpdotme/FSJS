let userScore = 0;
let compScore = 0;
let userScoreEl = document.getElementById("userScoreVal");
let compScoreEl = document.getElementById("compScoreVal");
let scoreBoard = document.querySelector(".score-board");
let userResult = document.getElementById("result-user-stat");
let compResult = document.getElementById("result-comp-stat");
let finalResult = document.getElementById("result-final-stat");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const choice = document.getElementsByClassName("choice");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * choices.length);

  return choices[choice];
}

function win() {
  userScore++;
  userScoreEl.innerHTML = userScore;
}

function lose() {
  compScore++;
  compScoreEl.innerHTML = compScore;
}

function play(userChoice) {
  const compChoice = computerChoice();
  userResult.textContent = `User: ${userChoice}`;
  compResult.textContent = `Computer: ${compChoice}`;
  switch (userChoice + compChoice) {
    // USER WINS
    case "rockscissors":
      finalResult.textContent = `smashed the ${compChoice}, User wins!`;
      win();
      break;
    case "paperrock":
      finalResult.textContent = `wrapped the ${compChoice}, User wins!`;
      win();
      break;
    case "scissorspaper":
      finalResult.textContent = `sliced the ${compChoice}, User wins!`;
      win();
      break;
    // USER lOSES
    case "rockpaper":
      finalResult.textContent = `Got wrapped by ${compChoice}, Computer Wins!`;
      lose();
      break;
    case "paperscissors":
      finalResult.textContent = `Got sliced by ${compChoice}, Computer Wins!`;
      lose();
      break;
    case "scissorsrock":
      finalResult.textContent = `Got smashed by ${compChoice}, Computer Wins!`;
      lose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      finalResult.textContent = `It's a draw`;
      break;
  }
}

function game() {
  rock.addEventListener("click", function () {
    play("rock");
  });

  paper.addEventListener("click", function () {
    play("paper");
  });

  scissors.addEventListener("click", function () {
    play("scissors");
  });
}

game();
