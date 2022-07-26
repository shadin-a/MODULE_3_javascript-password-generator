// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", onClickGeneratePassword);
console.log('hi');


// Write password to the #password input
function onClickGeneratePassword() {
  console.log("hi i clicked the button!")

  // These guys should actually be input from user not random consts
  const passwordLength = 10;
  const shouldUseLowercase = true;
  const shouldUseUppercase = true;
  const shouldUseSymbol = true;
  const shouldUseNumber = true;
  
  // 1. prompt user for password options
  // 2. generate password based on options
  var password = generatePassword(passwordLength, shouldUseLowercase, shouldUseUppercase, shouldUseNumber, shouldUseSymbol);

  // 3. display password to user
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(passwordLength, shouldUseLowercase, shouldUseUppercase, shouldUseNumber, shouldUseSymbol) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789';
  const symbol = '!@#$%^&*'
  var arrayOptions = [];

  if (shouldUseLowercase == true) {
    arrayOptions.push(lowercase);
  }
  if (shouldUseUppercase == true) {
    arrayOptions.push(uppercase);
  }
  if (shouldUseNumber == true) {
    arrayOptions.push(number);
  }
  if (shouldUseSymbol == true) {
    arrayOptions.push(symbol);
  }
  console.log(arrayOptions);

  var giantString = "";
  for (let i=0; i < arrayOptions.length; i++ ){
    giantString += arrayOptions[i];
  }
console.log(giantString);

  var password = '';
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * giantString.length);
    password += giantString[randomIndex];
    console.log(password);
  }
  return password;

}
