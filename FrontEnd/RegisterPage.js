
const form = document.getElementById("registerForm");

// Get all registration input fields
const name = document.getElementById("name");
const email = document.getElementById("email");
const rollNumber = document.getElementById("rollNumber");
const department = document.getElementById("department");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Get the separate error-message paragraphs
const NameError = document.getElementById("NameError");
const EmailError = document.getElementById("EmailError");
const RollError = document.getElementById("RollError");
const DepartmentError = document.getElementById("DepartmentError");
const DobError = document.getElementById("DobError");
const PasswordError = document.getElementById("PasswordError");
const ConfirmPasswordError =
    document.getElementById("ConfirmPasswordError");

// Show or hide the password when the eye button is clicked
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";

    togglePassword.innerText = isHidden ? "🙈" : "👁";

    togglePassword.setAttribute(
        "aria-label",
        isHidden ? "Hide password" : "Show password"
    );

    togglePassword.setAttribute("aria-pressed", String(isHidden));
});

// Validate the student's name
function checkName() {
    if (name.value.trim() === "") {
        NameError.innerText = "Please enter your full name.";
        return false;
    }

    NameError.innerText = "";
    return true;
}

// Validate the email format
function checkEmail() {
    const emailText = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailText === "") {
        EmailError.innerText = "Email is required.";
        return false;
    }

    if (!emailPattern.test(emailText)) {
        EmailError.innerText = "Please enter a valid email address.";
        return false;
    }

    EmailError.innerText = "";
    return true;
}

// Validate the student's roll number
function checkRollNumber() {
    if (rollNumber.value.trim() === "") {
        RollError.innerText = "Please enter your roll number.";
        return false;
    }

    RollError.innerText = "";
    return true;
}

// Check whether a department has been selected
function checkDepartment() {
    if (department.value === "") {
        DepartmentError.innerText = "Please select your department.";
        return false;
    }

    DepartmentError.innerText = "";
    return true;
}

// Validate the date of birth
function checkDob() {
    if (dob.value === "") {
        DobError.innerText = "Please select your date of birth.";
        return false;
    }

    const birthDate = new Date(dob.value + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (Number.isNaN(birthDate.getTime()) || birthDate > today) {
        DobError.innerText = "Date of birth cannot be in the future.";
        return false;
    }

    DobError.innerText = "";
    return true;
}

// Validate password strength
function checkPassword() {
    const pass = password.value;
    const errors = [];

    if (pass.length < 8) {
        errors.push("at least 8 characters");
    }

    if (!/[A-Z]/.test(pass)) {
        errors.push("one uppercase letter");
    }

    if (!/[0-9]/.test(pass)) {
        errors.push("one number");
    }

    if (!/[^A-Za-z0-9]/.test(pass)) {
        errors.push("one special character");
    }

    if (errors.length > 0) {
        PasswordError.innerText =
            "Password needs " + errors.join(", ") + ".";
        return false;
    }

    PasswordError.innerText = "";
    return true;
}

// Ensure the confirmation matches the password
function checkConfirmPassword() {
    if (confirmPassword.value === "") {
        ConfirmPasswordError.innerText =
            "Please confirm your password.";
        return false;
    }

    if (confirmPassword.value !== password.value) {
        ConfirmPasswordError.innerText =
            "Passwords do not match.";
        return false;
    }

    ConfirmPasswordError.innerText = "";
    return true;
}

// Run every validation when the form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const validName = checkName();
    const validEmail = checkEmail();
    const validRoll = checkRollNumber();
    const validDepartment = checkDepartment();
    const validDob = checkDob();
    const validPassword = checkPassword();
    const validConfirmPassword = checkConfirmPassword();

    // Redirect only when every field passes validation
    if (
        validName &&
        validEmail &&
        validRoll &&
        validDepartment &&
        validDob &&
        validPassword &&
        validConfirmPassword
    ) {
        window.location.href = "Index.html";
    }
});
