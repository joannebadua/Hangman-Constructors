// create 'Letter' constructor function that takes in a letter
//and creates an object with that letter 
var Letter = function(letter) {
  // this.students will hold all of our student objects
  this.letter = letter;
  this.guessedLetter = false;
  this.print = function () {
     switch(letterPlaceholder) {
       case "letter":
       return this.letter;
       break;
       case "nonLetter":
       return "_";
       break;
     }
  },
  letterPlaceholder();

this.guess = function(guess) {
    if((guess === this.letter {
      this.guessedLetter = true;

  };
};
};

// exporting our Letter constructor. We will require it in word.js
module.exports = Letter;