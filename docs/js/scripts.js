const button = document.getElementById("btn");
const message = document.getElementById("message");

if (button && message) {
    button.addEventListener("click", () => {
        message.textContent = "Thank you for clicking the button!"
    });
}