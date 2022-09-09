const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginForm.querySelector("input").value;
    localStorage.setItem(USERNAME_KEY, username);
    showGreetings(username);
}

function showGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    showGreetings(savedUsername);
}