// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


generateBtn.onclick = function generatePassword() {


var passwordLength = window.prompt("How long do you want your password to be? It must be between 8 and 128 characters ");
if (passwordLength <=7 || passwordLength >= 128) {
  alert("Your password must be between 8 and 128 characters");
  return;
} 
else {
  alert ("Your password is "  +  passwordLength+  "  characters long");
}


var lowerCaseChoice = confirm ("Would you like to include lower case characters in your password ?")
var upperCaseChoice = confirm ("Would you like to include upper case characters in your password ?")
var numbersChoice = confirm ("Would you like to include numbers in your password ?")
var specCharChoice = confirm ("Would you like to include special characters in your password ?")

if (lowerCaseChoice === false && upperCaseChoice === false && numbersChoice === false && specCharChoice === false) {
  alert ("Please choose at least one Parameter to generate a safe password");
  return;
}



var characterTypes = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialcharacters:['!@#$%^&*()_+{}:"<>?\|[];\',./`~'],
}

var userPassword = "";

for (i = 0; i < passwordLength; i++){
  userPassword = userPassword + passwordCharacter(Math.floor(Math.random() *passwordCharacter.length));
 
}

var passwordCharacter = {}
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

generatePassword();
}


