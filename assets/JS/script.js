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

 let characterAmount = window.prompt("Enter amount of characters you would like for your password.")
//Ask to input a numerical value for the password
if (characterAmount >= 6 && characterAmount < 10) {
  const getIntger = window.confirm("would you like to add numbers?");

if (getInput) {
  passInfo += passwordOption.num;
  passChars.push(getRandomchar)(passwordOption.num)

}
//ask if the user wants special characters
const getSpecialCharachter = confirm("Would you like to add Special Character?")
if (getSpecialCharachter) {
  passInfo += passwordOption.specialChar;
  passChars.push(getRandomchar(passwordOption.specialChar));
}
//Ask user if they want to add upper case letters
const getUpperCase = confirm("Would you like to add upper case letters?")
if (getUpperCase) {
  passInfo += passwordOption.upperCase;
  passChars.push(getRandomchar.upperCase);
};
//ask user if fthey want to add lower case letters
const getLowerCase = confirm("would you like to add Lower case letters?")
if (getLowerCase) {
  passInfo += passwordOption.lowerCase;
  passChars.push(getRandomchar(passwordOption.lowerCase))
}
//will pop up if the inputs have an issue
if (!passinfo) {
  alert("You need to select at least one option! Pleasse try again!");
  // will return to the beginning to satisfy the requirements
  return generatePassword();
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
