const setAlarmBtn = document.querySelector("#set-alarm-btn");
const timerBox = document.querySelector("#timer-box");

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

function setAlarm() {
  const selectedTime = timerBox.value;
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const currentFormattedTime = `${hours}:${minutes} ${ampm}`;

  if (selectedTime === currentFormattedTime) {
    alert("زمان انتخابی برابر با زمان فعلی است!");
  } else {
    alert(`الارم برای ${selectedTime} تنظیم شد!`);
  }
}

showTime();

setAlarmBtn.addEventListener("click", setAlarm);
