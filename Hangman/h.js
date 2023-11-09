// Define an array of words
const words = ['javascript', 'hangman', 'programming', 'openai', 'developer'];

// Select a random word from the array
const randomWord = words[Math.floor(Math.random() * words.length)];

// Create an array to store guessed letters
const guessedLetters = [];

// Initialize the number of remaining guesses
let remainingGuesses = 6;

// Display underscores for each letter in the random word
const wordDisplay = document.getElementById('word-display');
wordDisplay.textContent = '_'.repeat(randomWord.length);

// Display the remaining guesses
const remainingGuessesDisplay = document.getElementById('remaining-guesses');
remainingGuessesDisplay.textContent = remainingGuesses;

// Create buttons for each letter of the alphabet
const letterButtons = document.getElementById('letter-buttons');
for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(65 + i); // A, B, C, ...
  const button = document.createElement('button');
  button.textContent = letter;
  button.addEventListener('click', () => guessLetter(letter));
  letterButtons.appendChild(button);
}

// Function to handle a letter guess
function guessLetter(letter) {
  if (remainingGuesses <= 0) {
    return; // Game over, no more guesses
  }

  if (guessedLetters.includes(letter)) {
    return; // Letter already guessed
  }

  guessedLetters.push(letter);

  if (randomWord.includes(letter)) {
    // Correct guess
    updateWordDisplay();
  } else {
    // Incorrect guess
    remainingGuesses--;
    remainingGuessesDisplay.textContent = remainingGuesses;
  }

  if (remainingGuesses === 0) {
    endGame(false); // Out of guesses, player loses
  } else if (!wordDisplay.textContent.includes('_')) {
    endGame(true); // Player guessed the word
  }
}

// Function to update the word display with correctly guessed letters
function updateWordDisplay() {
  let displayText = '';
  for (const letter of randomWord) {
    if (guessedLetters.includes(letter)) {
      displayText += letter;
    } else {
      displayText += '_';
    }
  }
  wordDisplay.textContent = displayText;
}

// Function to end the game and display a message
function endGame(playerWins) {
  for (const button of letterButtons.querySelectorAll('button')) {
    button.disabled = true; // Disable all letter buttons
  }

  if (playerWins) {
    wordDisplay.textContent = 'Congratulations! You win!';
  } else {
    wordDisplay.textContent = `Game over. The word was "${randomWord}".`;
  }
}
