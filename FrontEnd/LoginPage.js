let password = document.getElementById("password");

let email = document.getElementById("email");
let Par = document.getElementById("ValidData");

function ToCheckEmailFormate() {
    let emailText = email.value.trim();

    if (emailText.length === 0) {
        Par.innerText = "Email cannot be empty";
    } else if (!emailText.includes("@") ||
               !emailText.includes(".")) {
        Par.innerText = "Invalid Email";
    }
}


function ToCheckPassword() {
    let pass = password.value;

    let hasUppercase = /[A-Z]/.test(pass);
    let hasNumber = /[0-9]/.test(pass);
    let hasSpecial = /[^A-Za-z0-9]/.test(pass);
    let hasLength = pass.length >= 8;

    if (!hasUppercase) {
        Par.innerText = "Password must contain one uppercase letter";
    } else if (!hasNumber) {
        Par.innerText = "Password must contain one number";
    } else if (!hasSpecial) {
        Par.innerText = "Password must contain one special character";
    } else if (!hasLength) {
        Par.innerText = "Password must contain at least 8 characters";
    } else {
        Par.innerText = "Password is valid!";
    }
}

