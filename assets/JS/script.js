// Assignment Code
var generateBtn = document.querySelector("#generate");

//This code 'passOpt' adds all the necessary data to to generate a unique password
const passOpt = {
specialChar: "!@#$%&'()*+,^-./%&'()*+,^-./:;<=>?[]_`{~}|",
lowerCase: "abcdefghijklmnopqrstuvwxyz",
upperCase:  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
num: "1234567890"
}

let generatePassword = function() {
 let passInfo = "";
 const passChars = [];
//Ask to input a numerical value for the password
 let characterAmount = prompt("Enter the number of characters you would like for your password.");
//Ask user if fthey want numerical values in their password.
 if (characterAmount >= 6 && characterAmount < 10) {
   const getIntger = confirm("Would you like to add numbers?");
   if (getIntger) {
     passInfo += passOpt.num;
     passChars.push(getRandomChar(passOpt.num));
   };
 //ask if the user wants special characters.
   const getSpecialCharacter = confirm("Would you like to add Special Characters?");
   if (getSpecialCharacter) {
     passInfo += passOpt.specialChar;
     passChars.push(getRandomChar(passOpt.specialChar));
   };
 //ask user if they want UPPER case letters
   const getUpperCase = confirm("Would you like to add uppercase letters?");
   if (getUpperCase) {
     passInfo += passOpt.upperCase;
     passChars.push(getRandomChar(passOpt.upperCase));
   };
 //Ask user if they LOWER case letters
   const getLowerCase = confirm("Would you like to add lowercase letters?");
   if (getLowerCase) {
     passInfo += passOpt.lowerCase;
     passChars.push(getRandomChar(passOpt.lowerCase));
   };
    for (let i = passChars.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const temp = passChars[i];
    passChars[i] = passChars[swapIndex];
    passChars[swapIndex] = temp;
  };
   

  if (!passInfo) {
    // notify user needs to select at least one option
    window.alert("You need to select at least one option!");
    // return user back to their questions
    return generatePassword();
  };

   while (passChars.length < characterAmount) {
    // pick a random character from passInfo
    passChars.push(getRandomChar(passInfo));
   };


   if (!passInfo) {
     alert("You need to select at least one option! Please try again!");
     return generatePassword();
   };
return passChars.join("");
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
