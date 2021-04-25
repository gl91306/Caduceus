const logForm = document.getElementById("login-form");
const logButton = document.getElementById("login-form-submit");
const logError = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = logForm.username.value;
    const password = logForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("Welcome!");
        location.reload();
    } else {
        logError.style.opacity = 1;
    }
})