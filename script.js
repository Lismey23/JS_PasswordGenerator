// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var lenght = prompt ("How long do you want your password to be? It must be between 8 and 128 characters ");

  if (lenght <=7 || lenght >= 128) {
    alert("Your password must be between 8 and 128 characters");
    return;
  } 
  else {
    alert ("Your password is "  +  lenght +  "  characters long");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// generate password
function generatePassword() {

// What characters would the user lke to include
var lowerCaseChoice = confirm ("Would you like to include lower case characters in your password ?")
var upperCaseChoice = confirm ("Would you like to include upper case characters in your password ?")
var numbersChoice = confirm ("Would you like to include numbers in your password ?")
var specCharChoice = confirm ("Would you like to include special characters in your password ?")

if (lowerCaseChoice === false && upperCaseChoice === false && numbersChoice === false && specCharChoice === false) {
  alert ("Please choose at least one Parameter to generate a safe password");
  return;
}



var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialcharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","\"","\\"];

//creating new Array to include the characters the user chooses

var passwordCharacter = [];
if (lowerCaseChoice === true) {

  passwordCharacter = passwordCharacter.concat(lowercase);
}
if (upperCaseChoice === true) {
  passwordCharacter = passwordCharacter.concat(uppercase);
}
if (numbersChoice === true) {
  passwordCharacter = passwordCharacter.concat(numbers);
}
if (specCharChoice === true) {
  passwordCharacter = passwordCharacter.concat(specialcharacters);
}

console.log(passwordCharacter);


// Creating Random password 
// Empty String variable to the loop below

var userPassword= "";

// Generating random characters

for (var i = 0; i < lenght; i++){
  var char = Math.floor(Math.random()*passwordCharacter.length);

  userPassword += String.fromCharCode(char)
  }
return userPassword;
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
