const addAlarmBtn = document.querySelector("#set-alarm-btn");

// Events:
addAlarmBtn.addEventListener("click", setAlarm);
/**
 * Sets an alarm based on user input and schedules its display.
 * @returns {void}
 */
function setAlarm() {
  const titleInput = document.querySelector(".title-alarm-text").value;
  const descriptionInput = document.querySelector(
    ".description-text-area"
  ).value;
  const selectedDate = document.querySelector("#datepicker").value;
  const selectedTime = document.querySelector("#timepicker").value;

  if (titleInput && selectedDate && selectedTime) {
    const alarmDateTime = new Date(`${selectedDate} ${selectedTime}`);
    const currentDateTime = new Date();

    if (alarmDateTime > currentDateTime) {
      const timeDifference = alarmDateTime - currentDateTime;
      // Schedule the display of the alarm
      setTimeout(
        () => showAlarmMessage(titleInput, descriptionInput),
        timeDifference
      );

      // Add the alarm to the output
      addToAlarmsOutput(
        `${titleInput || "Alarm!"}`,
        ` ${descriptionInput || "It's time!"}`
      );
    } else {
      // Display an error for invalid date/time
      Swal.fire({
        icon: "error",
        title: "Invalid Date/Time",
        text: "Please select a future date and time for the alarm.",
      });
    }
  } else {
    // Display an error for incomplete information
    Swal.fire({
      icon: "error",
      title: "Incomplete Information",
      text: "Please enter the title, select both date and time for the alarm.",
    });
  }
}

/**
 * Displays a success message for the scheduled alarm.
 * @param {string} title - The title of the alarm.
 * @param {string} description - The description of the alarm.
 * @returns {void}
 */
function showAlarmMessage(title, description) {
  Swal.fire({
    icon: "success",
    title: title || "Alarm!",
    text: description || "It's time!",
    // Additional actions related to showing the alarm message can be added here.
  });
}

/**
 * Formats a time string in HH:mm format.
 * @param {string} timeString - The time string in HH:mm format.
 * @returns {string} - The formatted time string.
 */
function formatTime(timeString) {
  const time = new Date(`2023-01-01 ${timeString}`);
  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/**
 * Adds an alarm message to the output element.
 * @param {string} message - The alarm message to be added.
 * @returns {void}
 */
function addToAlarmsOutput(title, description) {
  const freeReminderItem = document.querySelector(".free-reminder-item");
  const taskPart = document.createElement("div");
  const alarmsOutput = document.createElement("div");
  const titlePart = document.createElement("div");
  const textPart = document.createElement("div");
  const deletePart = document.createElement("div");
  const bxTrashIcon = document.createElement("div");
  freeReminderItem.append(taskPart);
  taskPart.append(alarmsOutput);
  alarmsOutput.append(titlePart);
  alarmsOutput.append(textPart);
  deletePart.append(bxTrashIcon);
  taskPart.append(deletePart);
  taskPart.classList.add("task-part");
  alarmsOutput.classList.add("description-part");
  titlePart.classList.add("title-part");
  textPart.classList.add("text-part");
  bxTrashIcon.classList.add("bx-trash");
  deletePart.classList.add("delete-part");
  titlePart.innerHTML = title;
  textPart.innerHTML = description;
  //   alarmsOutput.innerHTML += `<p>${message}</p>`;
}

// Initialize the datepicker
flatpickr("#datepicker", {
  enableTime: false,
  dateFormat: "Y-m-d",
});

// Initialize the timepicker with 15-minute intervals
const timepickerOptions = document.querySelector("#timepicker");
for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute += 15) {
    const timeString = `${String(hour).padStart(2, "0")}:${String(
      minute
    ).padStart(2, "0")}`;
    const option = document.createElement("option");
    option.value = timeString;
    option.textContent = formatTime(timeString);
    timepickerOptions.appendChild(option);
  }
}
