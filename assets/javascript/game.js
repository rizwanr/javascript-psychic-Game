//Declare and initiaze variables
var letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ],
  randomLetter = '',
  winCount = 0,
  lossCount = 0,
  guessesLeft = 0,
  guessedLetters = [],
  defaultGuessesLeft = 9;

//call the newGame function when the keypress is triggered
window.addEventListener('keypress', onKeyPress, false);
newGame();

//the main function
function newGame() {
  guessedLetters = [];
  resetGuesses();
  generateRandomLetter();
  console.log(randomLetter); // Turn on to see randomLetter in console
  displayOnScreen('wins', `Wins: ${String(winCount)}`);
  displayOnScreen('losses', `Losses: ${String(lossCount)}`);
  displayOnScreen('guessesleft', `Guesses Left: ${String(guessesLeft)}`);
}

function onKeyPress(key) {
  letter = key.key.toLowerCase();
  if (
    //checks if the letter has already been pressed
    letters.includes(letter, 0) &&
    guessedLetters.includes(letter, 0) === false
  ) {
    //if not push the letter to the list and print the letter and decrement the guessesLeft
    //Display the guesses left
    guessedLetters.push(letter);
    printKeyPressed(letter);
    guessesLeft--;
    displayOnScreen('guessesleft', `Guesses Left: ${String(guessesLeft)}`);
    //if the user input and the random letter matches, increment the wins and display it in the screen
    //reset the game by calling the new game
    if (String(letter) == String(randomLetter)) {
      winCount++;
      displayOnScreen('wins', `Wins: ${String(winCount)}`);
      newGame();
    }
    // if the guesses left is zero, increment the lossCOunt, display the loss and reset the game
    if (guessesLeft === 0) {
      lossCount++;
      displayOnScreen('losses', `Losses: ${String(lossCount)}`);
      newGame();
    }
  }
}

//generate the random letter by the computer
function generateRandomLetter() {
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
}

//if the guess left is 9 then just append the letter, if less than 9 then add a comma and append the letter to the list
function printKeyPressed(letter) {
  if (guessesLeft == 9) {
    document.getElementById('guessessofar').innerHTML += letter;
  } else {
    document.getElementById('guessessofar').innerHTML += ', ' + letter;
  }
}

//reset the game by resetting the guesses
function resetGuesses() {
  guessesLeft = defaultGuessesLeft;
  displayOnScreen('guessesleft', `Losses: ${String(guessesLeft)}`);
  displayOnScreen('guessessofar', `Your Guesses so far: `);
}

//displays the content on the screen
function displayOnScreen(divContainer, content) {
  document.getElementById(divContainer).innerHTML = content;
}
