const first = document.getElementById("first-name");
const last = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validation = false;
let validate = function() {
    if (first.value.length !== 0 && 
        last.value.length !== 0 &&
        email.value.length !== 0 &&
        phone.value.length === 10) {
            validation = true;
    } else {
        validation = false;
    }
}

const password = document.getElementById("password")
const confirmPw = document.getElementById("confirm-pw");
const message = document.getElementById("password-error");
const submit = document.querySelector("button[type=\"submit\"]");

passwordMatch = false;
let checkPassword = function() {
    if (password.length !== 0 &&
         confirmPw.value.length !== 0 &&
         password.value === confirmPw.value) {

        message.textContent = "";
        password.classList.remove("error");
        confirmPw.classList.remove("error");
        passwordMatch = true;
    } else { 
        password.classList.add("error");
        confirmPw.classList.add("error");
        passwordMatch = false;
    }
}

let enableSubmit = function() {
    if(validation === true && passwordMatch === true) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}