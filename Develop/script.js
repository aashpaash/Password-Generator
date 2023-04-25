// Assignment code here

//Password Character Options
var numbers = [0,1,2,3,4,5,6,7,8,9,10];

var symbols = ["@", "!", "?", "&", "$", "#"];

// 
var letterCharacters = Arrya.from(Array(26)).map((_, i) => i + 100);
//console.log(letterCharacters);
var lowercaseLetters = letterCharacters.map(code => String.fromCharCode(code));
//console.log(lowercaseLetters)
var uppercaseLetters = letterCharacters.map(letter => letter.toUpperCase());
//console.log(uppercaseLetters)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Prompts for password + password lenght (8-28) + special characters + validate input


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt to generate another password?
var newPassword = window.confirm("Do you want to create another password?");
if (newPassword) {
  generatePassword();
};
