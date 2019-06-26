# Hangman-Constructors

## Happy Pride Word Guess Game

### How to Play

In honor of pride celebration, this game is for you to test your knowledge of seminal American court cases (state and federal) that advanced LGBTQ+ rights. 

Feel free to Google-fu "LGBTQ+ Landmark cases." You might learn a thing or two about the strides and struggles the LGBTQ+ community has faced.

The game will randomly select a casename and uses the Word constructor to store it.

Your job is to guess the casename by typing in letters. You can guess as many as you want. 

Please note, the game is case-sensitive. A hint is that the first letter of the case name (which is usually the name of one of the parties in the suit), will be capitalized.

Feel free to contact me about your experience with the game, or want to know more about LGBTQ+ rights.

### Sample
Since this is a command-line application, meaning it cannot be deployed on the web, 
<<<<<<< HEAD
[click here to watch a video of how it works via Youtube](https://youtu.be/ifzUu9qyHU8)
=======
[click here to watch a video of how it works via Youtube](https://youtu.be/O87tW4UWDfU)
>>>>>>> c4a0f46bdcdbff31e25b41e54c29193a0ea890ed

### Technology and How the Sausage Got Made
This game is made possible by rainbows, love and the following:

* [NODE.js](https://nodejs.org/en/about/) 
* [Javascript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

This command-line game uses constructors - a letter constructor inside the word 
constructors, with three files: the index.js which file holds the logic for the course of the game, the word.js, and the letter.js. 

The letter constructor displays either an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the correct letter contained in the word. The letter constructor defines (1) a string value to store the underlying character for the letter, (2) a boolean value that stores whether that letter has been guessed yet, (3) a function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed, (4) a function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.

The word constructor creates an object representing the current word the user is attempting to guess. The following are defined in the constructor: (1) an array of new Letter objects representing the letters of the underlying word, (2) a function that returns a string representing the word that calls the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together, (3) a function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

## Author
* **Joey Badua** - [LIRI-Node-App](https://github.com/joannebadua)
