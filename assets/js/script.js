/* ============================================================================================================= 
   FOREWORD & HOMEWORK REVIEWER NOTE:
============================================================================================================= */

/*
I realize this file is a little comment-heavy. I'm leaving these comments for the purposes of my own learning.
Although I got this code to work without errors, I'd still like to explore why my initial approach didn't work.
I suspect I'll encounter real-world Javascript issues like this in the future, and I'd like to revisit my 
solution down the line. So don't be alarmed by the lines and lines of comments at the bottom of this file —— 
that's simply my original approach, and I plan to continue exploration on it. 
In the meantime... immediately below this foreword, you'll find the solution to homework assignment 3.
----------------------------------------------------------------------------------------------------------------
*/

/* 
STEP 1: CREATE ARRAYS TO STORE ALL PARAMETER VARIABLES
------------------------------------------------------
*/

// CREATE UPPERCASE ARRAY: 26 letters in the alphabet, and 65 represents capital "A"
const alphaUpper = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpper = alphaUpper.map((x) => String.fromCharCode(x));
console.log("Uppercase characters include: " + alphabetUpper);

// CREATE LOWERCASE ARRAY: 26 letters in the alphabet, and 97 represents lowercase "a"
const alphaLower = Array.from(Array(26)).map((e, i) => i + 97);
const alphabetLower = alphaLower.map((x) => String.fromCharCode(x));
console.log("Lowercase characters include: " + alphabetLower);

// CREATE NUMBERS ARRAY: => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] where the index starts at 0
const numbers = Array.from(Array(10).keys());
console.log("Numeric characters include: " + numbers);

// CREATE SPECIAL CHARACTER ARRAY: Manually enter acceptable special characters
const specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
console.log("Special characters include: " + specialCharacters);

/*
STEP 2: GENERATE PASSWORD WITH A SERIES OF PROMPTS AND CONFIRMATIONS
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

  // DEFINE: Create character variables to reference for parameter checkpoints. 
  var lowerCaseConfirmation = confirm("Would like to include lowercase characters in your password? If so, click OK.");
  var upperCaseConfirmation = confirm("Would like to include uppercase characters in your password? If so, click OK.");
  var numberConfirmation = confirm("Would like to include numbers in your password? If so, click OK.");
  var specialCharacterConfirmation = confirm("Would like to include special characters in your password? If so, click OK.");
 

  // LOOP: Run a loop to ensure that at least ONE parameter is confirmed. Given the fact that these are confirm elements, it automatically suggests that OK is true, and a cancellatio is false
  while (lowerCaseConfirmation === false && upperCaseConfirmation === false && numberConfirmation === false && specialCharacterConfirmation === false) {
    alert("Your password must include at least ONE password paramenter.");
    var lowerCaseConfirmation = confirm("Would like to include lowercase characters in your password? If so, click OK.");
    var upperCaseConfirmation = confirm("Would like to include uppercase characters in your password? If so, click OK.");
    var numberConfirmation = confirm("Would like to include numbers in your password? If so, click OK.");
    var specialCharacterConfirmation = confirm("Would like to include special characters in your password? If so, click OK.");
  }

  // PROCEED: Create an empty array container to use for gluing together all parameters based on confirmation boolean results
  var passwordContainer = [];

  /*
  CONCAT CONFRIMATIONS WITH INITIAL VARIABLE DEFINITIONS
  -------------------------------------------------------
  */

  // Lowercase confirmations
  if (lowerCaseConfirmation) {
    passwordContainer = passwordContainer.concat(alphabetLower);
    console.log("Lowercase characters confirmed.");
  }
  else {
    console.log("Lowercase characters not confirmed.");
  }
  // Uppercase confirmations
  if (upperCaseConfirmation) {
    passwordContainer = passwordContainer.concat(alphabetUpper);
    console.log("Uppercase characters confirmed.");
  }
  else {
    console.log("Uppercase characters not confirmed.");
  }
  // Number confirmations
  if (numberConfirmation) {
    passwordContainer = passwordContainer.concat(numbers);
    console.log("Numeric characters confirmed.");
  }
  else {
    console.log("Numeric characters not confirmed.");
  }
  // Special character confirmations
  if (specialCharacterConfirmation) {
    passwordContainer = passwordContainer.concat(specialCharacters);
    console.log("Special characters confirmed.");
  }
  else {
    console.log("Special characters not confirmed.");
  }

  // CREATE an empty string to tie-in confirmed parameters to random assortment of characters
  var generateRandomCharacters = "";

  // LOOP: Combine all confirmed parameters into one password
  // NOTE TO SELF: set the index to 0 (var i = 0), while the index is less than the length of the parameter, continue iteration until the length is met
  for (var i = 0; i < confirmCharacterLength; i++) {
    generateRandomCharacters = generateRandomCharacters + passwordContainer[Math.floor(Math.random() * passwordContainer.length)];
  }
  console.log(generateRandomCharacters);

  // This is just a test message to ensure the function executed successfully
  console.log("HOORAY! Your password was created successfully!");

  // This line is necessary to produce results, otherwise we're not explicitedly instructing this function to define the elements
  return generateRandomCharacters;
  
}

// Assignment Code (works as is)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (This function is fine as is)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button (works as is)
generateBtn.addEventListener("click", writePassword);


/* ================================================================================================ 
   UNSOLVED CODE: FEEL FREE TO DISREGARD EVERYTHING BELOW; THIS IS FOR ME TO REVISIT IN THE FUTURE 
================================================================================================ */

/*
GENERATE RANDOM LOWERCASE 
var createRandomLowerCharacter = String.fromCharCode(97 >120);
console.log(createRandomLowerCharacter);

GENERATE RANDOM UPPERCASE 
var createRandomUpperCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

GENERATE RANDOM NUMBERS 
var createRandomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
console.log(typeof createRandomNumber);

GENERATE RANDOM SPECIAL CHARACTERS 
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var createRandomSpecialCharacter = specialCharacters[Math.floor(Math.random()* specialCharacters.length)];
console.log("Testing to confirm randomly selected characters work: " + createRandomLowerCharacter + createRandomUpperCharacter + createRandomNumber + createRandomSpecialCharacter);

CREATE generatePassword() FUNCTION 
function generatePassword() {

  CHARACTER LENGTH CHECKPOINT
  -- -- -- -- -- -- -- -- -- -- -- -- -- -

  DEFINE: Ask user how many characters they would like to use between 8 - 128
  var confirmCharacterLength = (prompt("How many characters would you like your password to contain? (Must be 8 - 128.)"));

  ITERATE: Run a loop to check
  if character entry is between 8 - 128, and
  if not...revert back to the initial prompt
  while (confirmCharacterLength <= 7 || confirmCharacterLength >= 128) {
    alert("Password must be between 8-128 characters. Please try again.");
    var confirmCharacterLength = (prompt("How many characters would you like your password to contain? (Must be 8 - 128."));
  }

  CHARACTER PARAMETERS CONFIRMATION CHECKPOINT
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  DEFINE: Create character variables to reference
  for parameter checkpoints
  var lowerCaseConfirmation = confirm("Would like to include lowercase characters in your password? If so, click OK.");
  var upperCaseConfirmation = confirm("Would like to include uppercase characters in your password? If so, click OK.");
  var numberConfirmation = confirm("Would like to include numbers in your password? If so, click OK.");
  var specialCharacterConfirmation = confirm("Would like to include special characters in your password? If so, click OK.");


  LOOP: Run a loop to ensure that at least ONE parameter is confirmed
  while (lowerCaseConfirmation === false && upperCaseConfirmation === false && numberConfirmation === false && specialCharacterConfirmation === false) {
    alert("Your password must include at least ONE password paramenter.");
    var lowerCaseConfirmation = confirm("Would like to include lowercase characters in your password? If so, click OK.");
    var upperCaseConfirmation = confirm("Would like to include uppercase characters in your password? If so, click OK.");
    var numberConfirmation = confirm("Would like to include numbers in your password? If so, click OK.");
    var specialCharacterConfirmation = confirm("Would like to include special characters in your password? If so, click OK.");
  }

  PROCEED: Create an empty container to use
  for gluing together all parameters based on confirmation selections
  var passwordContainer = [];


  CONCAT CONFRIMATIONS WITH INITIAL VARIABLE DEFINITIONS
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

  Lowercase confirmations
  if (lowerCaseConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomLowerCharacter);
    console.log("Lowercase characters confirmed.");
  } else {
    console.log("Lowercase characters not confirmed.");
  }
  Uppercase confirmations
  if (upperCaseConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomUpperCharacter);
    console.log("Uppercase characters confirmed.");
  } else {
    console.log("Uppercase characters not confirmed.");
  }
  Number confirmations
  if (numberConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomNumber);
    console.log("Numeric characters confirmed.");
  } else {
    console.log("Numeric characters not confirmed.");
  }
  Special character confirmations
  if (specialCharacterConfirmation) {
    passwordContainer = passwordContainer.concat(createRandomSpecialCharacter);
    console.log("Special characters confirmed.");
  } else {
    console.log("Special characters not confirmed.");
  }

  CREATE empty string to tie - in confirmed parameters to random assortment of characters
  var generateRandomCharacters = "";

  LOOP: Combine all confirmed parameters into one password
  for (var i = 0; i < confirmCharacterLength; i++) {
    console.log(generateRandomCharacters + "This is line 141");
    generateRandomCharacters = generateRandomCharacters + passwordContainer[passwordContainer.length];
    console.log(passwordContainer.length);
    console.log("GENERATE PASSWORD LOOP IS WORKING!");
  }
  console.log(passwordContainer);

  return generateRandomCharacters;

}

Assignment Code
var generateBtn = document.querySelector("#generate");

Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

/* ================================================================================================ 
   NOTE TO SELF:
   ----------------
   Although technically the resolved code renders the required results, do more research on
   concatenating different 'typeof.' For example: I suspect in the future that bringing the numeric 
   4 with a string of "4" is a bad thing. It will equate to 44, rather than, in some required cases,
   resulting in the NUMBER 8.

   Another reason to do more research:
   I like the initial approach of creating random characters at the very start, but the problem 
   is the result only produces 1 character. Figure out a way to collect the entire charCode and
   randomize at the set variable stage.
================================================================================================ */