// Assignment Code
var generateBtn = document.querySelector("#generate");
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
