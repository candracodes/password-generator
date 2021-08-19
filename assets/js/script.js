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
  //TODO: CREATE A SERIES OF PROMPTS AND CONFIRMS TO SATISFY THE ACCEPTANCE CRITERIA
  console.log("Password generated successfully!");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

  //TODO: DELETE THIS COMMENT AFTER CREATING GENERATEPASSWORD()
  document.getElementById("password").innerHTML = "Testing out the DOM!";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
