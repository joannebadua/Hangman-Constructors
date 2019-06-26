// requiring our Student module exported from student.js
var Letter = require("./letter.js");
var Word = function(answer){
    // lets make this an array of letter constructors, of objects with new letters
    this.word = []
    for (var i = 0; i < answer.length; i++) {
        console.log(answer[i])
        // each time we loop, we get a new letter and build a letter constructor with it
        var newLetter = new Letter(answer[i])
        this.word.push(newLetter)
    }
    // this.print = function(){
    //     var answerString = "";
        
    //     return answerString;
    // this.wordArray = function (char){
    //     for (var i = 0; i<this.word.length; i++){
    //         this.word[i].guess(char);
    //     }
    // }
    // }
}
module.exports = Word;
