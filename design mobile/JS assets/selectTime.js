const currentTime = document.querySelector("#current-time");
const setAlarmBtn = document.querySelector("#set-alarm-btn");
const timerBox = document.querySelector("#timer-box");
const ringtone = new Audio("Audio/bedside-clock-alarm-95792.mp3");
const content = document.querySelector(".content");
let boxValue;
let isAlarmSet = false;

function showTime() {
  for (let i = 23; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    for (let j = 45; j >= 0; j -= 15) {
      j = j < 10 ? "0" + j : j;
      let ampm = i >= 12 && i <= 23 ? "PM" : "AM";
      // create a template.
      let option = `<option value="${i} : ${j} ${ampm}">${i}:${j} ${ampm}</option>`;
      timerBox.innerHTML += option;
    }
  }
}

showTime();

function getCurrentTime() {
  // getting hour, mins,secs
  let date = new Date(),
    hours = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    ampm = "AM";

  if (hours >= 12) {
    ampm = "PM";
  }
  // If hour value is 0, set this value to 12
  hours = hours == 0 ? (hours = 12) : hours;
  // Adding 0 before hour,mins,sec if this value is less than 10.
  hours = hours < 10 ? "0" + hours : hours;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  return { hours, minute, second, ampm };
}

// setInterval(() => {
//   const { hours, minute, second, ampm } = getCurrentTime();
//   attachClickEventToItems(function (clickedDate) {
//     if (boxValue == `${hours} : ${minute} ${ampm} ${clickedDate}`) {
//       console.log(clickedDate);
//       ringtone.play();
//       ringtone.loop = true;
//     }
//   });
// }, 1000);

setAlarmBtn.addEventListener("click", () => {
  boxValue = timerBox.value;
  statusAlarm(isAlarmSet);
});

function statusAlarm(status) {
  if (status == false) {
    timerBox.classList.add("disable");

    setAlarmBtn.innerHTML = "clear alarm";
    isAlarmSet = true;
  } else {
    timerBox.classList.remove("disable");
    ringtone.pause();
    isAlarmSet = false;
    boxValue = "";
    setAlarmBtn.innerHTML = "Set alarm";
  }
}
