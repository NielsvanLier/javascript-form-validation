const userInputField = document.getElementById('username');
const passwordInputField = document.getElementById('password');
const userError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
function validateInputValue(e) {

    if (e.target.value.includes('@')) {
        userError.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else{
        userError.textContent = '';
    }
    if (e.target.value.length<6){
        passwordError.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    } else{
        passwordError.textContent = '';
    }
}

userInputField.addEventListener("keyup", validateInputValue);
passwordInputField.addEventListener("keyup", validateInputValue);
