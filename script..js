function generatePassword() {

    let length = parseInt(document.getElementById("length").value);

    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+{}[]<>?";

    let characters = "";

    if (uppercase) {
        characters += upperChars;
    }

    if (lowercase) {
        characters += lowerChars;
    }

    if (numbers) {
        characters += numberChars;
    }

    if (symbols) {
        characters += symbolChars;
    }

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
    document.getElementById("message").innerText = "Password generated successfully!";
}


function copyPassword() {

    let password = document.getElementById("password").value;

    if (password === "") {
        alert("Please generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password);

    document.getElementById("message").innerText =
        "Password copied to clipboard!";
}