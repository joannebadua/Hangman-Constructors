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
       case "non-letter":
       return "_";
       break;
     }
  },
  letterPlaceholder();

this.letterCheck = function(check) {
    if((check === this.letter {
      this.guessedLetter = true;

  };
};
};

// exporting our Letter constructor. We will require it in word.js
module.exports = Letter;