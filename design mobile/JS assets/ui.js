const welcomeName = document.querySelector(".welcome-name");

function showWelcomeMessage() {
  const userName = prompt("لطفاً نام خود را وارد کنید:");
  if (userName) {
    welcomeName.textContent = `Hello, ${userName}!`;
  } else {
    welcomeName.textContent = "Hello, my friend!";
  }
}
showWelcomeMessage();
