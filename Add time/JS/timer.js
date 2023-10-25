// select timer box.
const timerBox = document.querySelector("#timer-box");
const currentTime = document.querySelector("#current-time");
const setAlarmBtn = document.querySelector("#set-alarm-btn");
const content = document.querySelector(".content");

let alarmTime,
  isAlarmSet = false,
  ringtone = new Audio("");

// function setAlarm() {
//   let time = `${}`;
//   console.log(time);
// setAlarmBtn.addEventListener("click", () => {
//   // Get the option element by its index (starting from 0)
//   let optionElement = timerBox.options[timerBox.options.length - 1];

//   // Print the value of the option element in the console
//   console.log(optionElement.value);
// });
// }

// Events:
setAlarmBtn.addEventListener("click", getAlarm);

function showTime() {
  for (let i = 23; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    for (let j = 45; j >= 0; j -= 15) {
      j = j < 10 ? "0" + j : j;
      let ampm = i >= 12 && i <= 23 ? "PM" : "AM";
      // create a template.
      let option = `<option value="${i}:${j} ${ampm}">${i}:${j} ${ampm}</option>`;
      timerBox.innerHTML += option;
    }
  }
}
showTime();

// This callback function will call after every 1000 miliseconds.
function setAlarm() {
  const selectedTime = timerBox.value;
  // getting hour, mins,secs
  let date = new Date(),
    hours = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    ampm = "AM";

  if (hours >= 12) {
    hours = hours - 12;
    ampm = "PM";
  }
  const currentFormattedTime =
    (currentTime.innerHTML = `${hours}:${minute}:${second} ${ampm}`);
  if (selectedTime === currentFormattedTime) {
  } else {
    alert(`الارم برای ${selectedTime} تنظیم شد!`);
  }
  // If hour value is 0, set this value to 12
  hours = hours == 0 ? (hours = 12) : hours;
  // Adding 0 before hour,mins,sec if this value is less than 10.
  hours = hours < 10 ? "0" + hours : hours;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
}

function getAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }

  let time = `${timerBox.value}`;

  if (time.includes("Select")) {
    return alert("Please, select a valid time to set Alarm!");
  }
  isAlarmSet = true;
  alarmTime = time;
  content.classList.add("disable");
  console.log(time);
  setAlarmBtn.innerText = "Clear Alarm";
}

// setInterval(() => {
//   setAlarm();

//   if (alarmTime == `${hours}:${minute} ${ampm}`) {
//     ringtone.play();
//     ringtone.loop = true;
//   }
// }, 1000);
// ---------------------------------------------------------
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
