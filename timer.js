let seconds = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(incrementTimer, 1000); // Increment the timer every second (1000 milliseconds)
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  seconds = 0;
  clearInterval(timerInterval);
  updateTimerDisplay();
}
