const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");



// Create reminder function (Template Card)
function createReminder(id, message) {
    // Error
    if (message && message.length > 45) {
        alert("We only support 45 characters");
        return;
    } else if (!message) {
        alert("Please enter a Reminder");
        return;
    }

    
    const li = document.createElement("li");
    li.id = id;
    li.className = "reminder";
    const div = document.createElement("div");
    div.className = "text";
    div.innerText = message;

    
    const actionContainer = document.createElement("div");
    actionContainer.className = "actions"

    const checkBtn = document.createElement("button");
    checkBtn.className = "btn-check";
    checkBtn.innerText = "Checked";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.innerText = "Delete";

  
    checkBtn.addEventListener("click", function () {
        if (li.id == id) {
            div.style.textDecoration = "line-through";
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (li.id == id) {
            list.removeChild(li);
        }
    });

   
    actionContainer.appendChild(checkBtn);
    actionContainer.appendChild(deleteBtn);
   
    li.appendChild(div);
    li.appendChild(actionContainer);

    return li;
}

newReminder.addEventListener("click", function () {
    let message = prompt("Please enter a Reminder");
    let id = Math.floor(Math.random() * 100);
    let reminder = createReminder(id, message);
    list.appendChild(reminder);
});