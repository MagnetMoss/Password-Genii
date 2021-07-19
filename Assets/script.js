// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var uppercase;
var lowercase;
var numeric
var special;
var characters = ""
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const sym = "!@#$%^&*_-+={}[];:,./<>?";



function genPW() {

  var length = () => {
    length = prompt("How long would you like your Password length to be?");
    if(length >= 8 && length <= 128) {
      length();
    } else {
      alert("Password needs to be between 8 and 128 characters, please try again.");
      length();
    }
    return length;
  }

  length();

  if(confirm("Would you like Uppercase Letters?") === true) {
    characters += upper;
    // console.log(characters)
  } else {

  }

  if(confirm("Would you like Lowercase Letters?") === true) {
    characters += lower;
    // console.log(characters)
  } else {

  }

  if(confirm("Would you like Numbers?") === true) {
    characters += num;
    // console.log(characters)
  } else {

  }

  if(confirm("Would you like Special characters?") === true) {
    characters += sym;
    // console.log(characters)
  } else {

  }

  var password = "";
  for(i = 0; i < length; i++) {
    // console.log(i)
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    // console.log(password)
  }
  return password
}
// Write password to the #password input
function writePW() {
  var pwd = genPW();
  var pwdText = document.querySelector("#password");

  pwdText.value = pwd;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePW);