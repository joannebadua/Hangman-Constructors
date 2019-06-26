// requiring our Student module exported from student.js
var Letter = require("./letter.js");
var Word = function(answer){
    // lets make this an array of letter constructors, of objects with new letters
    this.word = []
    for (var i = 0; i < answer.length; i++) {
        // console.log(answer[i])
        // each time we loop, we get a new letter and build a letter constructor with it
        var newLetter = new Letter(answer[i])
        // store in the empty array in ln 5 with push
        this.word.push(newLetter)
    }
    //check
    this.check = function (userGuess){
        // is your userguess match, then change guessletter from false to true
        //talking about this.word from line 5, our magic array with letter object
        //what we typed
        for (var i = 0; i < this.word.length; i++) {
            //comparing it to ln 14
            if ( this.word[i].letter === userGuess){
                //if we find a letter match, change it from false to true
                this.word[i].guessedLetter = true;
            }
        }
    }
    //when we print, then all the false will get underscore, and vise versa
   this.print = function(){
    //    loop through word from ln 5
    var displayString = "";
       for (var i = 0; i < this.word.length; i++) {
        //conditional - if guessed letter is false, _; if true, put letter.
        // console.log(this.word[i])
        if ( this.word[i].guessedLetter === false){
            displayString += "_ "
        }
        else {
            displayString += this.word[i].letter + " "
        }
       }
       console.log(displayString)
   }
   this.checkScore = function (){
       //tallying how many trues we got from guessing letter, to determine if the word is fully guessed
       var trueTally = 0;
       var trueLimit = this.word.length;
       for (let i = 0; i < this.word.length; i++) {
           const element = this.word[i];
           if (this.word[i].guessedLetter === true) {
               trueTally++; 
           }
       }
            if (trueTally === trueLimit) {
                console.log("WORD GUESSED - GAME OVER!")
            }
   }
}

module.exports = Word;
