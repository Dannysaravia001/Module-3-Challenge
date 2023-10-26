// Assignment Code
var generateBtn = document.querySelector("#generate");

//This code 'passwordValues' adds all the data to to generate a unique password
var passwordValues = {
specialChar: "!@#$%&'()*+,^-./%&'()*+,^-./:;<=>?[]_`{~}|",
lowerCaseLetter: "abcdefghijklmnopqrstuvwxyz",
upperCaseLetter:  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
randomNumber: "1234567890"
}

var generatePassword = function() {
 var passInfo = "";
 const passChars = [];
//Ask to input a numerical value for the password
 let characterAmount = prompt("Enter the number of characters you would like for your password. Note: it should be between 6-10");
//Ask user if fthey want numerical values in their password.
 if (characterAmount >= 6 && characterAmount < 11) {
   var getIntger = confirm("Would you like to add numbers?");
   if (getIntger) {
     passInfo += passwordValues.num;
     passChars.push(getRandomChar(passwordValues.num));
   };
 //ask if the user wants special characters.
   var getSpecialCharacter = confirm("Would you like to add Special Characters?");
   if (getSpecialCharacter) {
    passInfo += passwordValues.specialChar;
    acters.push(getRandomChar(passwordValues.specialChar));
   };
 //ask user if they want UPPER case letters
   var getUpperCaseLetter = confirm("Would you like to add uppercase letters?");
   if (getUpperCase) {
    passInfo += passwordValues.upperCaseLetter;
    passCharacters.push(getRandomChar(passwordValues.upperCaseLetter));
   };
 //Ask user if they LOWER case letters
   var getlowerCaseLetter = confirm("Would you like to add lowercase letters?");
   if (getlowerCaseLetter) {
    passInfo += passwordValues.lowerCaseLetter;
    passCharacters.push(getRandomChar(passwordValues.lowerCaseLetter));
   };
    for (let i = passCharacters.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const temp = passCharacters[i];
    passCharacters[i] = passCharacters[swapIndex];
    passCharacters[swapIndex] = temp;
  };
   

  if (!passInfo) {
  // notify user needs to select at least one option
    window.alert("You need to select at least one option!");
  // return user back to their questions
    return generatePassword();
  };

   while (passCharacters.length < characterAmount) {
    // pick a random character from passInfo
    passCharacters.push(getRandomChar(passInfo));
   };


   if (!passInfo) {
     alert("You need to select at least one option! Please try again!");
     return generatePassword();
   };
return passCharacters.join("");
} else {
  // Alert the user if the provided length is invalid.
  alert("You need to provide a valid length!");
  return generatePassword();
}
};

// Function to get a random character from a string.
function getRandomChar(fromString) {
  return fromString[Math.floor(Math.random() * fromString.length)];
}

// Function to write the generated password to the input field.
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Function to write the generated password to the input field.
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
