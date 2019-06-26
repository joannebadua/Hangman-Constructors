var inquirer = require("inquirer");
var word = require("./word.js");

  //declare variale for the array which stores
    //the history of user letter guesses
    //into and assign it into an empty array
// var guessedLetter = []
//declare variable that is a string of 26 lower and 26 uppercase letters
//to check against individual characters
var lettersArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var answersArray = ["Baehr", "Windsor", "Bowers", "Obergefell", "Gloucester", "Benitez", "Lawrence", "Brandon", "Richards", "Olesen", "Hodges", "Hively", "Rhoades", "Baker", "Southworth", "Cammermeyer"];
// randomly chooses word from answers array
// first, create an empty Array, use a forloop for everytime, 
//create a new letter object and push it into the empy array
var randomAnswerIndex = Math.floor(Math.random() * answersArray.length);
var randomAnswer;

// function gameCheck(){
//   //Logic
//   if ()
//     //declare variable for the array which stores
//     //
//     var answersArray = [];
//     for (var i = 0; i < answersArray[randomAnswerIndex].length; i++)
//     {

//     }
// }

function userInput(){
    //inquirer to have prompt the user to guess and input letter, and 
    //keeps track of remaining guesses
    var guessesLeft = 10; 
    inquirer.prompt([
        {
        type: "input",
        name: "userGuess",
        message: "Pick a letter (lower or upper case) to guess a seminal court case advancing gay marriage!"
    },
])
.then(function(letterGuess){
  //fire off what we type
    console.log("what we typed", letterGuess)
    gameWord.check(letterGuess.userGuess);
    gameWord.checkScore();
    gameWord.print();
    userInput();
    //check the letter if the letter is in the word we're checking 
    //but function will live in the word.js file bc this is where the letters and array are
    //check the m in the array
    
})
}
// THIS kicks off and goes to word.js - then goes to answer in ln 3 of word.js
// answer in the word.js is the placeholder
var gameWord = new word(answersArray[randomAnswerIndex])
console.log("gameWord", gameWord);
gameWord.print();
userInput();


