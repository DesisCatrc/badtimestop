window.onload = function() {
  var mins = "00";
  var seconds = "00";
  var tens = "00";
  var appendMin = document.getElementById("mins");
  var appendTens = document.getElementById("tens");
  var appendMin = document.getElementById("mins");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var now;

  buttonStart.onclick = function() {
    clearInterval(now);
    now = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function() {
    clearInterval(now);
  };

  buttonReset.onclick = function() {
    clearInterval(now);
    min = "00";
    tens = "00";
    seconds = "0";
    appendMin.innerHTML = min;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      console.log("mins");
      min++;
      appendMin.innerHTML = "0" + min;
      seconds = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (mins > 9){
      appendMin.innerHTML = mins;
    }
  }
};
