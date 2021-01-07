// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// Promp the user for the desired password lenght.

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

}

