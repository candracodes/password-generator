/* 
STEP 1: GENERATE RANDOM LOWERCASE CHARACTERS
----------------------------------------------
• We need a full list of HTML (or ASCI) characters, so I referenced them here: http://stevehardie.com/2009/09/character-code-list-char-code/
• We need characters chosen at random, so I'm using Math.random
• Math.random chooses numbers from 0 - 1 but since we don't want a decimal I'm wrapping it with Math.floor to round down
• Simply writing Math.floor(Math.random()) won't render anything, so I'm multiplying by 26 since there are 26 letters in the alphabet
• In the charCode set, lowercase letters start with the letter a, which is the value of 97, so this code picks a random number and multiplies it by 97
*/

var createRandomLowerCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

/* 
STEP 2: GENERATE RANDOM UPPERCASE CHARACTERS
----------------------------------------------
• All of the steps above are needed here as well, only THIS time we need to generate uppercase letters
• In the HTML Charcode set, a capital A represents the number 65, so we swap out the 97 for 65
*/

var createRandomUpperCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

/* 
STEP 3: GENERATE RANDOM NUMBERS
-----------------------------------
• We want to reference numbers from 0 to 9
• In the HTML Charcode set, the number 0 is represented by 48
• 0 - 9 is only a span of 10, so rather than saying * 26 (which represents the alphabet), we use 10
*/

var createRandomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

/* 
STEP 4: GENERATE RANDOM SYMBOL
-----------------------------------
• We've accounted for all letters and number variations, so now we need special characters
• We want to choose from an authorized set of special characters found here: https://owasp.org/www-community/password-special-characters
• I'm basing the selection solely on the following characters: !#$%&'()*+,-./:;<=>?@[\]^_`{|}~
*/

var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var createRandomSpecialCharacter = specialCharacters[Math.floor(Math.random()* specialCharacters.length)];
console.log("Testing to confirm randomly selected characters work: " + createRandomLowerCharacter + createRandomUpperCharacter + createRandomNumber + createRandomSpecialCharacter);

/*
STEP 5: GENERATE PASSWORD WITH A SERIES OF PROMPTS AND CONFIRMATIONS
---------------------------------------------------------------------
• Although the starter code has a function that writes the password to our HTML page, we still need a function that actually creates the password
• According to the README, we need to:
    --> Fire off a prompt after the user clicks the generate password button
    --> Ask the user (via prompt) how many character they want their password to consist of (8 - 128 limit)
    --> Ask the user (via prompt) if they would like to include the following: lowercase, uppercase, numeric and/or special characters
    --> After confirming each prompt, validate the input, and print the newly generated password into the HTML textarea 
*/

function generatePassword() {
  /*
  CHARACTER LENGTH CHECKPOINT
  ---------------------------
  */

  // DEFINE: Ask user how many characters they would like to use between 8 - 128
  var confirmCharacterLength = (prompt("How many characters would you like your password to contain? (Must be 8 - 128.)"));

  // ITERATE: Run a loop to check if character entry is between 8 - 128, and if not... revert back to the initial prompt
  while (confirmCharacterLength <= 7 || confirmCharacterLength >= 128) {
    alert("Password must be between 8-128 characters. Please try again.");
    var confirmCharacterLength = (prompt("How many characters would you like your password to contain? (Must be 8 - 128."));
  }

  /*
  CHARACTER PARAMETERS CONFIRMATION CHECKPOINT
  --------------------------------------------
  */

  // DEFINE: Create character variables to reference for parameter checkpoints
  var lowerCaseConfirmation = confirm("Would like to include lowercase characters in your password? If so, click OK.");
  var upperCaseConfirmation = confirm("Would like to include uppercase characters in your password? If so, click OK.");
  var numberConfirmation = confirm("Would like to include numbers in your password? If so, click OK.");
  var specialCharacterConfirmation = confirm("Would like to include special characters in your password? If so, click OK.");
 

  // LOOP: Run a loop to ensure that at least ONE parameter is confirmed
  while (lowerCaseConfirmation === false && upperCaseConfirmation === false && numberConfirmation === false && specialCharacterConfirmation === false) {
    alert("Your password must include at least ONE password paramenter.");
    var lowerCaseConfirmation = confirm("Would like to include lowercase characters in your password? If so, click OK.");
    var upperCaseConfirmation = confirm("Would like to include uppercase characters in your password? If so, click OK.");
    var numberConfirmation = confirm("Would like to include numbers in your password? If so, click OK.");
    var specialCharacterConfirmation = confirm("Would like to include special characters in your password? If so, click OK.");
  }

  // PROCEED: Create an empty container to use for gluing together all parameters based on confirmation selections
  var passwordContainer = [];

  /*
  CONCAT CONFRIMATIONS WITH INITIAL VARIABLE DEFINITIONS
  -------------------------------------------------------
  */

  // Lowercase confirmations
  if (lowerCaseConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomLowerCharacter);
    console.log("Lowercase characters confirmed.");
  }
  else {
    console.log("Lowercase characters not confirmed.");
  }
  // Uppercase confirmations
  if (upperCaseConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomUpperCharacter);
    console.log("Uppercase characters confirmed.");
  }
  else {
    console.log("Uppercase characters not confirmed.");
  }
  // Number confirmations
  if (numberConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomNumber);
    console.log("Numeric characters confirmed.");
  }
  else {
    console.log("Numeric characters not confirmed.");
  }
  // Special character confirmations
  if (specialCharacterConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomSpecialCharacter);
    console.log("Special characters confirmed.");
  }
  else {
    console.log("Special characters not confirmed.");
  }

  // CREATE empty string to tie-in confirmed parameters to random assortment of characters
  var generateRandomCharacters = "";

  // LOOP: Combine all confirmed parameters into one password
  for (var i = 0; i < confirmCharacterLength; i++) {
    generateRandomCharacters = generateRandomCharacters + passwordContainer[passwordContainer.length];
    console.log("GENERATE PASSWORD LOOP IS WORKING!");
  }
  return generateRandomCharacters;

}

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
