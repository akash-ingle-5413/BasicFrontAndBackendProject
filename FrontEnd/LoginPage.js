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
