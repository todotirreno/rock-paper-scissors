function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
  return randomElem(plays);
}

function randomElem(arr) {
  return Math.floor(Math.random() * arr.length);
}
