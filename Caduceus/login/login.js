const logForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const logError = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = logForm.username.value;
    const password = logForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("Welcome!");
        window.location.href = "https://caduceus.zohebmopo.repl.co/intro/welcome.html";
    } else {
        logError.style.opacity = 1;
    }
})