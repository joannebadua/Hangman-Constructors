// create 'Letter' constructor function that takes in a letter
//and creates an object with that letter 
var Letter = function(letter) {
  // this.letter will hold all of our letter objects
  this.letter = letter;
  this.guessedLetter = false;
  //displays either an underlying character or a blank placeholder
//such as an underscore depending on whether the user
//has guessed the letter

};

// exporting our Letter constructor. We will require it in word.js
module.exports = Letter;