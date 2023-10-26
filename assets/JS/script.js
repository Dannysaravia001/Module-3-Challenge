// Assignment Code
var generateBtn = document.querySelector("#generate");

//This code 'passwordValues' adds all the data to to generate a unique password
var passwordValues = {
specialCharacter: "!@#$%&'()*+,^-./%&'()*+,^-./:;<=>?[]_`{~}|",
lowerCaseLetter: "abcdefghijklmnopqrstuvwxyz",
upperCaseLetter:  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
randomNumber: "1234567890"
}

// Function to generate a password
var generatePassword = function() {
  var passInfo = ""; // Variable to store the selected character sets
  var passChars = ""; // Variable to store the generated password

  // Ask the user how many characters they want for the password 
  let characterAmount = prompt("Enter the number of characters you would like for your password. Note: it should be between 6-10");

  if (characterAmount >= 6 && characterAmount < 11) {
    // Ask the if user wants to include numbers
    var getIntger = confirm("Would you like to add numbers?");
    if (getIntger) {
      passInfo += "0123456789"; // Include numbers in the character sets
      passChars += getRandomChar("0123456789"); // Add a random number to the password
    }

    // Ask the if user wants to include special characters
    var getspecialCharacter = confirm("Would you like to include Special Characters?");
    if (getspecialCharacter) {
      passInfo += "!@#$%^&*"; // Include special characters in the character sets
      passChars += getRandomChar("!@#$%^&*"); // Add a random special character to the password
    }

    // Ask the if user wants to include uppercase letters
    var getUpperCaseLetter = confirm("Would you like to include uppercase letters?");
    if (getUpperCaseLetter) {
      passInfo += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Include uppercase letters in the character sets
      passChars += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ"); // Add a random uppercase letter to the password
    }

    // Ask the if user wants  to include lowercase letters
    var getlowerCaseLetter = confirm("Would you like to include lowercase letters?");
    if (getlowerCaseLetter) {
      passInfo += "abcdefghijklmnopqrstuvwxyz"; // Include lowercase letters in the character sets
      passChars += getRandomChar("abcdefghijklmnopqrstuvwxyz"); // Add a random lowercase letter to the password
    }

    // This shuffles the characters in a random order
    for (let i = passChars.length - 1; i > 0; i--) {
      const swapIndex = Math.floor(Math.random() * (i + 1));
      const temp = passChars[i];
      passChars[i] = passChars[swapIndex];
      passChars[swapIndex] = temp;
    }
    // Notify the user if no options were selected
    if (!passInfo) {
      window.alert("You need to select at least one option!"); 
      // Retry the password generation
      return generatePassword(); 
    }

    // Fill in the remaining characters to meet the desired length
    while (passChars.length < characterAmount) {
      passChars += getRandomChar(passInfo);
    }
    // Return the generated password
    return passChars; 
  } else {
     // Alert the user for an invalid password length
    alert("You need to provide a valid length!"); 
    // Retry the password generation
    return generatePassword();
  }
};

// Function to get a random character from a string.
function getRandomChar(fromString) {
  return fromString[Math.floor(Math.random() * fromString.length)];
}

// Function to write new password into empty field.
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
