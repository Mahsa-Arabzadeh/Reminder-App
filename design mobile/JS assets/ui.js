const welcomeName = document.querySelector(".welcome-name");
const header = document.querySelector("#header");
const searchBox = document.querySelector(".search-box");

function showWelcomeMessage() {
  const userName = prompt("لطفاً نام خود را وارد کنید:");
  if (userName) {
    welcomeName.textContent = `Hello, ${userName}!`;
  } else {
    welcomeName.textContent = "Hello, my friend!";
  }
}
showWelcomeMessage();

function getFormattedDate() {
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
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = months[today.getMonth()];

  const formattedDate = `Today ${month}, ${day}`;
  const dateToday = document.createElement("div");
  dateToday.classList.add("date-today");
  dateToday.innerHTML = formattedDate;
  header.insertBefore(dateToday, searchBox);
  return formattedDate;
}
getFormattedDate();
