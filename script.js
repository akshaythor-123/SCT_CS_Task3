const password = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");
const togglePassword = document.getElementById("togglePassword");

const lengthCheck = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");

password.addEventListener("input", checkPassword);

function checkPassword() {

    const value = password.value;

    let score = 0;

    if (value.length >= 8) {
        score++;
        lengthCheck.innerHTML = "✅ Minimum 8 characters";
    } else {
        lengthCheck.innerHTML = "❌ Minimum 8 characters";
    }

    if (/[A-Z]/.test(value)) {
        score++;
        uppercaseCheck.innerHTML = "✅ One uppercase letter";
    } else {
        uppercaseCheck.innerHTML = "❌ One uppercase letter";
    }

    if (/[a-z]/.test(value)) {
        score++;
        lowercaseCheck.innerHTML = "✅ One lowercase letter";
    } else {
        lowercaseCheck.innerHTML = "❌ One lowercase letter";
    }

    if (/[0-9]/.test(value)) {
        score++;
        numberCheck.innerHTML = "✅ One number";
    } else {
        numberCheck.innerHTML = "❌ One number";
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
        specialCheck.innerHTML = "✅ One special character";
    } else {
        specialCheck.innerHTML = "❌ One special character";
    }

    switch(score){

        case 0:
        case 1:
            strengthFill.style.width = "20%";
            strengthFill.style.background = "red";
            strengthText.innerHTML = "Strength : Very Weak";
            break;

        case 2:
            strengthFill.style.width = "40%";
            strengthFill.style.background = "orange";
            strengthText.innerHTML = "Strength : Weak";
            break;

        case 3:
            strengthFill.style.width = "60%";
            strengthFill.style.background = "gold";
            strengthText.innerHTML = "Strength : Medium";
            break;

        case 4:
            strengthFill.style.width = "80%";
            strengthFill.style.background = "deepskyblue";
            strengthText.innerHTML = "Strength : Strong";
            break;

        case 5:
            strengthFill.style.width = "100%";
            strengthFill.style.background = "green";
            strengthText.innerHTML = "Strength : Very Strong";
            break;
    }

    if(value.length === 0){
        strengthFill.style.width = "0%";
        strengthText.innerHTML = "Strength : None";
    }

}

togglePassword.addEventListener("click", function(){

    if(password.type === "password"){
        password.type = "text";
        togglePassword.innerHTML = "🙈";
    }
    else{
        password.type = "password";
        togglePassword.innerHTML = "👁️";
    }

});