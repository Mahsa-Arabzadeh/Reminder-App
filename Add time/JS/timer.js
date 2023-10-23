// select timer box.
const timerBox = document.querySelector("#timer-box");

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  timerBox[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

const config = {
  timeSet: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};

function diffrence(time) {
  time = config.timeSet.minutes + time;
  return time;
}

function displayTimer() {
  //   create option for set timer.
  const optionBox = document.createElement("option");
  // append option to the timer box.
  timerBox.appendChild(optionBox);
  //   start timer:
  const startTime = 0;
  const endTime = 24;
  //   create a (for) loop for making option box.
  for (let i = startTime; i <= endTime; i += diffrence(20)) {
    timerBox.innerHTML += `<option> ${i} <option/>`;
  }
}

displayTimer();

function currentTime() {}
