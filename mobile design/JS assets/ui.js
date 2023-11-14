const welcomeName = document.querySelector(".welcome-name");
const header = document.querySelector("#header");
const searchBox = document.querySelector(".search-box");
const plusAddReminder = document.querySelector(".add-reminder-plus");
const closeModal = document.querySelector(".cancel-btn");
const addAlarmBtn = document.querySelector("#set-alarm-btn");

// Events:
closeModal.addEventListener("click", modalPupUp);
plusAddReminder.addEventListener("click", modalPupUp);
addAlarmBtn.addEventListener("click",modalPupUp)

// functions:
function showWelcomeMessage() {
    const usernameValue = localStorage.getItem("username");

    document.querySelector(
        ".welcome-name"
    ).innerHTML = `Hello, ${usernameValue}!`;
    if(usernameValue === null){
        document.querySelector(
            ".welcome-name"
        ).innerHTML = `Hello, my friend!`;
    }
}

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

// modal for add alarm.
function modalPupUp() {
    const modal = document.querySelector(".modal-pupup");
    modal.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    getFormattedDate();
    showWelcomeMessage();
});
