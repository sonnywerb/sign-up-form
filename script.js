const password = document.getElementById("password")
const confirmPw = document.getElementById("confirm-pw");
const message = document.getElementById("password-error");
const submit = document.querySelector("button[type=\"submit\"]");

let check = function() {
    if (password.value === confirmPw.value) {
        message.textContent = "";
        password.classList.remove("error");
        confirmPw.classList.remove("error");
        submit.disabled = false;
    } else { 
        password.classList.add("error");
        confirmPw.classList.add("error");
        submit.disabled = true;
    }
}
