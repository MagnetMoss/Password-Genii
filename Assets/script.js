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


function length() {
  length = prompt("How long would you like your Password length to be?");
  if(length < 8) {
    length()
  }
  return length;
}

function genPW() {
  length()
  if(prompt("Would you like Uppercase Letters? (y/n)") === "y") {
    characters += upper;
    // console.log(characters)
  }
  if(prompt("Would you like Lowercase Letters? (y/n)") === "y") {
    characters += lower;
    // console.log(characters)
  }
  if(prompt("Would you like Numbers? (y/n)") === "y") {
    characters += num;
    // console.log(characters)
  }
  if(prompt("Would you like Special characters? (y/n)") === "y") {
    characters += sym;
    // console.log(characters)
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