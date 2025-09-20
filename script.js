console.log("JS Linked!");

let sec = 0;
let min = 0;
let running = null;

function startUp() {
  if (running === null) {
    // only start if no interval is active, start counting 1 sec per 1000ms
    running = setInterval(upSec, 1000);
  }
}

function upSec() {
  sec += 1;

  if (sec == 60) {
    min += 1;
    sec = 0;
  }

  //   display the sec and min; convert the ints to a string and then ensure the start is always at least 2 characters, preceded with a 0 if <2
  let displaySec = sec.toString().padStart(2, "0");
  let displayMin = min.toString().padStart(2, "0");

  document.getElementById("Timer").innerText = `${displayMin}:${displaySec}`;
}

function reset() {
  sec = 0;
  min = 0;
  // stop the interval if it's running
  clearInterval(running);
  running = null;

  // reset display too
  document.getElementById("Timer").innerText = "00:00";
}

// setInterval(upSec, 1000);
