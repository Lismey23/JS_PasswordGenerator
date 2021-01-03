// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
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





var characterTypes = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialcharacters:['!@#$%^&*()_+{}:"<>?\|[];\',./`~'],
}

var characterUserChoice = function () {
  var userLowerCase = prompt ("Please confirm with a yes or no if you would like to add Lower cases to your password");
  var userUpperCase = prompt ("Please confirm with a yes or no if you would like to add Upper cases to your password");
  var userNumber = prompt ("Please confirm with a yes or no if you would like to add Numbers to your password");
  var userSpecialCharacters = prompt ("Please confirm with a yes or no if you would like to add Special Characters to your password");
}

}

generatePassword()
characterUserChoice ()