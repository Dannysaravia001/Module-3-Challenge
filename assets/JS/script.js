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

 let characterAmount = window.prompt("Enter the number of characters you would like for your password.");

 if (characterAmount >= 6 && characterAmount < 10) {
   const getIntger = window.confirm("Would you like to add numbers?");
   if (getIntger) {
     passInfo += passwordOption.num;
     passChars.push(getRandomchar(passwordOption.num));
   };
 
   const getSpecialCharacter = confirm("Would you like to add Special Characters?");
   if (getSpecialCharacter) {
     passInfo += passwordOption.specialChar;
     passChars.push(getRandomchar(passwordOption.specialChar));
   };
 
   const getUpperCase = confirm("Would you like to add uppercase letters?");
   if (getUpperCase) {
     passInfo += passwordOption.upperCase;
     passChars.push(getRandomchar(passwordOption.upperCase));
   };
 
   const getLowerCase = confirm("Would you like to add lowercase letters?");
   if (getLowerCase) {
     passInfo += passwordOption.lowerCase;
     passChars.push(getRandomchar(passwordOption.lowerCase));
   };
 
   if (!passInfo) {
     alert("You need to select at least one option! Please try again!");
     return generatePassword();
   };
return passChars.join("");
} else {
  // Alert the user if the provided length is invalid
  alert("You need to provide a valid length!");
  return generatePassword();
}

// Function to get a random character from a string
function getRandomChar(fromString) {
  return fromString[Math.floor(Math.random() * fromString.length)];
}

// Get a reference to the "Generate" button
const generateBtn = document.querySelector("#generate");

// Function to write the generated password to the input field
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}











};
//Ask to input a numerical value for the password

//ask if the user wants special characters

//ask the user if they want numerical values

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
