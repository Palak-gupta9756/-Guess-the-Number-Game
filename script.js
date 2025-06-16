let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  attempts++;

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    feedback.style.color = "green";
  } else if (guess < secretNumber) {
    feedback.textContent = "Too low! Try a higher number.";
    feedback.style.color = "orange";
  } else if (guess > secretNumber) {
    feedback.textContent = "Too high! Try a lower number.";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Please enter a valid number.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("feedback").textContent = "";
}
