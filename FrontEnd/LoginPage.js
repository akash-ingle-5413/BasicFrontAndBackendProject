
let email = document.getElementById("email");
let password = document.getElementById("password");

let EmailError = document.getElementById("EmailError");
let PasswordError = document.getElementById("PasswordError");

function ToCheckEmailFormate() {
    let emailText = email.value.trim();

    if (emailText === "") {
        EmailError.innerText = "Email cannot be empty";
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailText)) {
        EmailError.innerText = "Please enter a valid email";
        return false;
    }

    EmailError.innerText = "";
    return true;
}

function ToCheckPassword() {
    let pass = password.value;
    let errors = [];

    if (!/[A-Z]/.test(pass)) {
        errors.push("one uppercase letter");
    }

    if (!/[0-9]/.test(pass)) {
        errors.push("one number");
    }

    if (!/[^A-Za-z0-9]/.test(pass)) {
        errors.push("one special character");
    }

    if (pass.length < 8) {
        errors.push("at least 8 characters");
    }

    if (errors.length > 0) {
        PasswordError.innerText =
            "Password must contain " + errors.join(", ");
        return false;
    }

    PasswordError.innerText = "";
    return true;
}

function ValidateForm() {
    let validEmail = ToCheckEmailFormate();
    let validPassword = ToCheckPassword();

    return validEmail && validPassword;
}
