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

  function playRound(human, computer) {

    console.log(human, computer);
    const result = document.querySelector(".result")

    const pcPlay = document.querySelector(".pcPlay");
    pcPlay.textContent = computer.toUpperCase();

    if (human.toLowerCase() == computer) {
      result.textContent = `It's TIE! You both chose the ${computer}`;
      return;
    }

    else if (
      human.toLowerCase() == "rock" && computer == "scissors" ||
      human.toLowerCase() == "paper" && computer == "rock" ||
      human.toLowerCase() == "scissors" && computer == "paper" )
    {
      console.log(`You Won This Round! ${human} beats ${computer}`)
      result.textContent = `You Won This Round! ${human} beats ${computer}`;
      humanScore++;
      return;
    }

    else {
      console.log(`You Lost This Round! ${computer} beats ${human}`)
      result.textContent = `You Lost This Round! ${computer} beats ${human}`;
      computerScore++;
    }
  }

  const rock = document.querySelector(".one");
  const paper = document.querySelector(".two");
  const scissors = document.querySelector(".th");
  const h1 = document.querySelector("h1")

  scissors.focus();
  paper.focus();
  rock.focus();

  rock.addEventListener("click",function(){
    const getHumanChoice = "rock";
    h1.textContent = "Click To Play Another Round";
    playRound(getHumanChoice, getComputerChoise());

    let finalYou = document.querySelector(".finalYou");
    let finalPc = document.querySelector(".finalPc");

    finalYou.textContent = humanScore;
    finalPc.textContent = computerScore;

    if (humanScore == 5) {
     h1.textContent = `You Won The Game ! Click To Play Start Another Game!`;
     computerScore = 0;
     humanScore = 0;
    }
    else if (computerScore == 5){
     h1.textContent = `You Lost This Game ! Click To Play Start Another Game!`;
     computerScore = 0;
     humanScore = 0;
    }
  })

  paper.addEventListener("click", () => {
    const getHumanChoice = "paper";
    h1.textContent = "Click To Play Another Round";
    playRound(getHumanChoice, getComputerChoise());

    let finalYou = document.querySelector(".finalYou");
    let finalPc = document.querySelector(".finalPc");

    finalYou.textContent = humanScore;
    finalPc.textContent = computerScore;

    if (humanScore == 5) {
     h1.textContent = `You Won The Game ! Click To Play Start Another Game!`;
     computerScore = 0;
     humanScore = 0;
    }
    else if (computerScore == 5){
     h1.textContent = `You Lost This Game ! Click To Play Start Another Game!`;
     computerScore = 0;
     humanScore = 0;
    }
  })

  scissors.addEventListener("click", () => {
    const getHumanChoice = "scissors";
    h1.textContent = "Click To Play Another Round";
    playRound(getHumanChoice, getComputerChoise());

    let finalYou = document.querySelector(".finalYou");
    let finalPc = document.querySelector(".finalPc");

    finalYou.textContent = humanScore;
    finalPc.textContent = computerScore;

    if (humanScore == 5) {
     h1.textContent = `You Won The Game ! Click To Play Start Another Game!`;
     computerScore = 0;
     humanScore = 0;
    }
    else if (computerScore == 5){
     h1.textContent = `You Lost This Game ! Click To Play Start Another Game!`;
     computerScore = 0;
     humanScore = 0;
    }
  })
}

playGame();
