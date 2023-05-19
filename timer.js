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

function incrementTimer() {
  seconds++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  console.log(formatTime(seconds));
}


function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}

// Usage
startTimer();