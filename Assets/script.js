// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = "0123456789";
var spcl = "!@#$%^&*()_+-={}[]:;><"
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordlength = document.getElementById("length").value;
var incSpecials = document.getElementById("symbols");
var incNum = document.getElementById("numbers");

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
var characters = alpha;
incNum.checked ? (characters += numbers): "";
incSpecials.checked ? (characters += symbols): "";
password.value = genPW(length.value, characters);
// console.log(genPW)
});

// Write password to the #password input
function genPW(passwordlength, characters) {
  var password = "";
  
  for (var i=0; i<length; i++){
    password =+ characters.charAt(
    Math.floor(Math.random() * characters.length)
    );
  }
  return password
  console.log(password)

}

