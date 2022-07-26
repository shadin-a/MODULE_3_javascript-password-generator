// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", onClickGeneratePassword);
console.log('hi');


// Write password to the #password input
function onClickGeneratePassword() {
  console.log("hi i clicked the button!")

    // 1. prompt user for password options
  let passwordLength = prompt("Please select a password length between 8 and 128!", "10");
  if (passwordLength<8 || passwordLength>128){

  alert("That number was not between 8 and 128. Please select a password length between 8 and 128!", "10");
  console.log('the people want a length!' );
  return;
  }

  let shouldUseUppercase = confirm("Would you like to include uppercase letters?");
  console.log('the people want a uppercase!' )

  let shouldUseLowercase = confirm("Would you like to include lowercase letters?");
  console.log('the people want a lowercase!' )

  let shouldUseNumber = confirm("Would you like to include numbers?");
  console.log('the people want a number!' )

  let shouldUseSymbol = confirm("Would you like to include symbols?");
  console.log('the people want a symbol!' )
  
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
