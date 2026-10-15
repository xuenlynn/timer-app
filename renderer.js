let intervalId = null;
let remainingTime = null;

const startButton = document.getElementById('startbutton');
const pauseButton = document.getElementById('pausebutton');
const inputTime = document.getElementById('time');
const display = document.getElementById('display');

startButton.addEventListener('click', function() {
  if (remainingTime === null) {
    const enteredTime = Number(inputTime.value)

    if (!Number.isFinite(enteredTime) || enteredTime < 0) {
      return
    }
    
    remainingTime = enteredTime
    display.textContent = remainingTime
  }
  if (remainingTime === 0 || intervalId != null) {
    return
  }
  pauseButton.style.display = 'inline';


  intervalId = setInterval(function() {
    remainingTime -= 1
    display.textContent = remainingTime
    
    if (remainingTime <= 0) {
      clearInterval(intervalId)
      intervalId = null
      remainingTime = null
      startButton.textContent = 'Start'
      pauseButton.style.display = 'none'
    }
  }, 1000)

})

pauseButton.addEventListener('click', function() {
  if (intervalId != null) {
    clearInterval(intervalId)
    intervalId = null
    startButton.textContent = 'Continue'
  }
})