console.log("JS Linked!");

let sec = 0;
let min = 0;
let running = null;

function upSec() {
  sec += 1;

  if (sec == 60) {
    min += 1;
    sec = 0;
  }

  let displaySec = sec.toString().padStart(2, "0");
  let displayMin = min.toString().padStart(2, "0");

  document.getElementById("Timer").innerText = `${displayMin}:${displaySec}`;
}

function reset() {
  sec = 0;
  min = 0;
  // stop the interval if it's running
  clearInterval(countUp);
  running = null;

  // reset display too
  document.getElementById("Timer").innerText = "00:00";
}

// setInterval(upSec, 1000);
