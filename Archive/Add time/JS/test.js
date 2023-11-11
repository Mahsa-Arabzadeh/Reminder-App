const btn = document.querySelector("#submit");
const outputDate = document.querySelector(".output-date");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document.querySelector(".calendar-current-date");

const prenexIcons = document.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function to generate the calendar
const manipulate = () => {
  // Get the first day of the month
  let dayone = new Date(year, month, 1).getDay();

  // Get the last date of the month
  let lastdate = new Date(year, month + 1, 0).getDate();

  // Get the day of the last date of the month
  let dayend = new Date(year, month, lastdate).getDay();

  // Get the last date of the previous month
  let monthlastdate = new Date(year, month, 0).getDate();

  // Variable to store the generated calendar HTML
  let lit = "";

  // Loop to add the last dates of the previous month
  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  }

  // Loop to add the dates of the current month
  for (let i = 1; i <= lastdate; i++) {
    // Check if the current date is today
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li value="${i}" class="mahsa ${isToday}">${i}</li>`;
  }

  // Loop to add the first dates of the next month
  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`;
  }

  // Update the text of the current date element
  // with the formatted current month and year
  currdate.innerText = `${months[month]} ${year}`;

  // update the HTML of the dates element
  // with the generated calendar
  day.innerHTML = lit;
};
manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach((icon) => {
  // When an icon is clicked
  icon.addEventListener("click", () => {
    // Check if the icon is "calendar-prev"
    // or "calendar-next"
    month = icon.id === "calendar-prev" ? month - 1 : month + 1;

    // Check if the month is out of range
    if (month < 0 || month > 11) {
      // Set the date to the first day of the
      // month with the new year
      date = new Date(year, month, new Date().getDate());

      // Set the year to the new year
      year = date.getFullYear();

      // Set the month to the new month
      month = date.getMonth();
    } else {
      // Set the date to the current date
      date = new Date();
    }

    // Call the manipulate function to
    // update the calendar display
    manipulate();
  });
});

const mahsa = document.querySelectorAll(".mahsa");
// let clickedDateMiladi;
// mahsa.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const clickedDate = e.target.value;
//     clickedDateMiladi = new Date(year, month, clickedDate).toLocaleDateString(
//       "en-US",
//       {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       }
//     );
//     outputDate.innerHTML = `${clickedDateMiladi}`;
//   });
// });

function attachClickEventToItems(callback) {
  mahsa.forEach((item) => {
    item.addEventListener("click", (e) => {
      const clickedDate = e.target.value;
      const clickedDateMiladi = new Date(
        year,
        month,
        clickedDate
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      outputDate.innerHTML = `${clickedDateMiladi}`;

      // ارسال تاریخ به callback
      callback(clickedDateMiladi);
    });
  });
}

// -----------------------------------------------
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

setInterval(() => {
  const { hours, minute, second, ampm } = getCurrentTime();
  currentTime.innerHTML = `${hours} : ${minute} : ${second} ${ampm}`;
  attachClickEventToItems(function (clickedDate) {
    if (boxValue == `${hours} : ${minute} ${ampm} ${clickedDate}`) {
      console.log(clickedDate);
      ringtone.play();
      ringtone.loop = true;
    }
  });
}, 1000);

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
