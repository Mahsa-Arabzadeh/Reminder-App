// select timer box.
const timerBox = document.querySelector("#timer-box");
const timerMinutes = document.querySelector("#timer-minutes");

function showTime() {
  for (let i = 23; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    for (let j = 45; j >= 0; j -= 15) {
      j = j < 10 ? "0" + j : j;
      let ampm = i >= 12 && i <= 23 ? "PM" : "AM";
      // create a template.
      let option = `<option value="${i}">${i}:${j} ${ampm}</option>`;
      timerBox.innerHTML += option;
    }
  }
}

showTime();

// const config = {
//   timeSet: {
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   },
// };

// function diffrence(time) {
//   time = config.timeSet.minutes + time;
//   return time;
// }

// function displayTimer() {
//   //   create option for set timer.
//   const optionBox = document.createElement("option");
//   // append option to the timer box.
//   timerBox.appendChild(optionBox);
//   //   start timer:
//   const startTime = 0;
//   const endTime = 24;
//   //   create a (for) loop for making option box.
//   for (let i = startTime; i <= endTime; i += diffrence(20)) {
//     timerBox.innerHTML += `<option> ${i} <option/>`;
//   }
// }

// displayTimer();

// function currentTime() {}
