console.log("JS Linked!");

let sec = 0;
let min = 0;

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
  //   clearInterval(countUp);
}

// setInterval(upSec, 1000);
