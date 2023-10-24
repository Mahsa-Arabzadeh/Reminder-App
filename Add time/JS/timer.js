// select timer box.
const timerBox = document.querySelector("#timer-box");
const timerMinutes = document.querySelector("#timer-minutes");

function showTime() {
  for (let i = 23; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    for (let j = 45; j >= 0; j -= 15) {
      j = j < 10 ? "0" + j : j;
      // create a template.
      let option = `<option value="${i}">${i}:${j}</option>`;
      timerBox.innerHTML += option;
    }
  }
}

showTime();

// for (let j = 60; j >= 0; j -= 15) {
//   j = j < 10 ? "0" + j : j;
//   let option = `<option value="${j}">${j}</option>`;
//   // timerBox[1].firstElementChild.insertAdjacentHTML("afterend", option);
//   timerMinutes.innerHTML += option;
// }

// for (let i = 2; i > 0; i--) {
//   let ampm = i == 1 ? "AM" : "PM";
//   let option = `<option value="${ampm}">${ampm}</option>`;
//   timerBox[2].firstElementChild.insertAdjacentHTML("afterend", option);
// }

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
