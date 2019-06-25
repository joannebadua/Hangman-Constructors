// requiring our Student module exported from student.js
var Letter = require("./letter.js");
var Word = function(answer){
    this.word = [],
    this.print = function(){
        var answerString = "";
        for (var i = 0; i<this.word.length; i++) {
            answerString = this.word[i] + " ";
        }
        return answerString;
    this.wordArray = function (char){
        for (var i = 0; i<this.word.length; i++){
            this.word[i].guess(char);
        }
    }
    }
}
module.exports = Word;
