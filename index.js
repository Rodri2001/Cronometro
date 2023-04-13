var hours = 0;
var minutes = 0;
var seconds = 0;
var timer;

function startTimer() {
  if (!timer) {
    timer = setInterval(showTime, 1000);
  }
}

function showTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  var time = (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" + (seconds > 9 ? seconds : "0" + seconds);
  document.getElementById("timer").innerHTML = time;
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
}
