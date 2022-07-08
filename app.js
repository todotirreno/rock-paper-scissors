"use strict";

let playerSelection = prompt("Enter play:", "Rock");

console.log(playRound(playerSelection, computerPlay()));

function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
  return plays[~~(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
  let win = {};
  let lose = {};
  let tie = {};

  let rock = {
    name: "Rock",
    Scissors: win,
    Paper: lose,
    Rock: tie,
  };
  let paper = {
    name: "Paper",
    Scissors: lose,
    Paper: tie,
    Rock: win,
  };
  let scissors = {
    name: "Scissors",
    Scissors: tie,
    Paper: win,
    Rock: lose,
  };

  const plays = [rock, paper, scissors];

  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.substring(1).toLowerCase();
  playerSelection = plays.find((play) => play.name == playerSelection);

  win.message = `You won. ${playerSelection.name} beats ${computerSelection}`;
  lose.message = `You lost. ${playerSelection.name} beats ${computerSelection}`;
  tie.message = `${playerSelection.name} vs. ${computerSelection} is a tie.`;

  return playerSelection[computerSelection].message;
}
