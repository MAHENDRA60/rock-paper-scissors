// Creat a function that return random items from rock,paper and scissors.
function getComputerChoise() {
  let Random = Math.random();

  if (Random <= 0.33) {
      return "rock";
  }
  else if (Random > 0.33 && Random <= 0.66) {
      return "paper";
  }
  else if (Random > 0.66) {
      return "scissors";
  }
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  let bothTie = 0;

  function getHumanChoice() {
     return prompt(`What Do You Choose?\nYou: ${humanScore} \ncomputer: ${computerScore}`);
  }

  function playRound(human, computer) {

    console.log(human, computer);

    if (human.toLowerCase() == computer) {
      console.log(`It's TIE!, You both choose the ${computer}`);
      alert(`It's TIE!, You both choose the ${computer}`);
      bothTie++;
      return;

    }
    else if (human.toLowerCase() == "rock" && computer == "scissors" || human.toLowerCase() == "paper" && computer == "rock" || human.toLowerCase() == "scissors" && computer == "paper") {
     console.log(`You Won This Round! ${human} beats ${computer}`)
     alert(`You Won This Round! ${human} beats ${computer}`)
     humanScore++;
     return;
    }

    else {
      console.log(`You Lost This Round! ${computer} beats ${human}`)
      alert(`You Lost This Round! ${computer} beats ${human}`)
      computerScore++;
    }
  }

  for (let i = 0, n = 5; i < n; i++) {
    playRound(getHumanChoice(), getComputerChoise());
  }

  if (humanScore == computerScore) {
    console.log(`It's TIE! You Won ${humanScore} Rounds, Lost ${computerScore} And Tied ${bothTie} Out Of 5.`);
    alert(`It's TIE! You Won ${humanScore} Rounds, Lost ${computerScore} And Tied ${bothTie} Out Of 5.`);
  }
  else if (humanScore > computerScore) {
    console.log(`You Won The Game! You Won ${humanScore} Rounds, Lost ${computerScore} And Tied ${bothTie} Out Of 5.`);
    alert(`You Won The Game! You Won ${humanScore} Rounds, Lost ${computerScore} And Tied ${bothTie} Out Of 5.`);
  }
  else {
    console.log(`You Lost This Game! You Lost ${computerScore} Rounds, Won ${humanScore} Rounds, And Tied ${bothTie} Out Of 5.`);
    alert(`You Lost This Game! You Lost ${computerScore} Rounds, Won ${humanScore} Rounds, And Tied ${bothTie} Out Of 5.`);

  }
}

playGame();
