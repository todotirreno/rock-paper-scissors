"use strict";
let playerScore = 0;
let computerScore = 0;
const results = document.getElementById("results");
document.body.addEventListener("click", game);

function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
  return plays[~~(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
  const plays = [
    {
      name: "Rock",
      Scissors: "win",
      Paper: "lose",
      Rock: "tie",
    },
    {
      name: "Paper",
      Scissors: "lose",
      Paper: "tie",
      Rock: "win",
    },
    {
      name: "Scissors",
      Scissors: "tie",
      Paper: "win",
      Rock: "lose",
    },
  ];

  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.substring(1).toLowerCase();
  playerSelection = plays.find((play) => play.name == playerSelection);

  let result = { name: playerSelection[computerSelection] };
  switch (result.name) {
    case "win":
      result.message = `You won this round. ${playerSelection.name} beats ${computerSelection}`;
      break;
    case "lose":
      result.message = `You lost this round. ${playerSelection.name} beats ${computerSelection}`;
      break;
    case "tie":
      result.message = `${playerSelection.name} vs. ${computerSelection} is a tie.`;
      break;
  }
  return result;
}

function game(e) {
  if (e.target.tagName !== "BUTTON") return;

  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    results.replaceChildren();
  }

  let playerSelection = e.target.dataset.option;
  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);

  switch (roundResult.name) {
    case "win":
      playerScore++;
      break;
    case "lose":
      computerScore++;
      break;
  }
  // console.log(
  //   `${roundResult.message}. Score: player: ${playerScore} computer ${computerScore}`
  // );
  results.textContent += `${roundResult.message}. Score: player: ${playerScore} computer ${computerScore}\r\n`;
  if (playerScore === 5 || computerScore === 5) {
    results.append(
      `Game over. Player score: ${playerScore}, Computer Score ${computerScore}. ${
        playerScore > computerScore ? "Player" : "Computer"
      } wins`
    );
    return;
  }
  // if (playerScore > computerScore) console.log("Game over. You win");
  // else if (computerScore > playerScore) console.log("Game over. You lost");
  // else console.log("Game over. Tie.");
}
