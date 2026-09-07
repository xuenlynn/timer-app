// Timer logic

let intervalId = null;


// when start button is clicked, convert the time input to a Number
// check there is no existing interval, if so, clear it 
// make pause button visible for user to pause
// decrement time by 1 then display, until it hits below 0, then clear the interval
document.getElementById('startbutton').addEventListener('click', function() {
  let time = Number(document.getElementById('time').value);

  if (intervalId !== null) {
    clearInterval(intervalId)
  };

  document.getElementById('pausebutton').style.display = 'inline'

  intervalId = setInterval( function() {
    document.getElementById('display').textContent = time;
    time -= 1

    if (time < 0) {
      clearInterval(intervalId)
    }
  }, 1000 );
});

// when pause button is clicked, store the remaining time in a variable (ISSUE HERE, KEEP GETTING UNDEFINED)
// switch start button to continue button, that will restore/create a new interval from the remaining time (ISSUE HERE)
document.getElementById('pausebutton').addEventListener('click', function () {
  let remainingTime = document.getElementById('display').value
  console.log(remainingTime)
  console.log(typeof(remainingTime))

  clearInterval(intervalId)
  document.getElementById('startbutton').textContent = 'Continue'

document.getElementById('startbutton').addEventListener('click', function() {
  document.getElementById('display').textContent = time;
  remainingTime -= 1

  if (remainingTime < 0) {
    clearInterval(intervalId)
  }
}, 1000 );


  
  // let remainingTime = document.getElementById('display')
  // // console.log(remainingTime)
  // console.log(intervalId)

})


