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
     return prompt(`What Do You Choose?\nYou: ${humanScore} \nRobot: ${computerScore}\nTie: ${bothTie}`);
  }

  function playRound(human, computer) {

    console.log(human, computer);

    if (human.toLowerCase() == computer) {
      console.log(`It's TIE! You both chose the ${computer}`);
      alert(`It's TIE!, You both chose the ${computer}`);
      bothTie++;
      return;
    }

    else if (
      human.toLowerCase() == "rock" && computer == "scissors" ||
      human.toLowerCase() == "paper" && computer == "rock" ||
      human.toLowerCase() == "scissors" && computer == "paper" )
    {
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

  let finalScore = `You: ${humanScore}\nRobot: ${computerScore}\nTie: ${bothTie}`

  if (humanScore == computerScore) {
    console.log(`The Game Is Tie! \n${finalScore}`);
    alert(`The Game Is Tie! \n${finalScore}`);
  }
  else if (humanScore > computerScore) {
    console.log(`You Won The Game !\n${finalScore}`);
    alert(`You Won The Game !\n${finalScore}`);
  }
  else {
    console.log(`You Lost This Game !\n${finalScore}`);
    alert(`You Lost This Game !\n${finalScore}`);
  }
}

playGame();
