var inquirer = require("inquirer");
var word = require("./word.js");

  //declare variale for the array which stores
    //the history of user letter guesses
    //into and assign it into an empty array
var guessedLetter = []
//declare variable that is a string of 26 lower and 26 uppercase letters
//to check against individual characters
var lettersArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var answersArray = ["Michael Jordan","Stephen Curry","Lebron James", "Serena Williams", "Buster Posey"];
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
        message: "Pick a lowercase or uppercase letter to see if you can guess famous athlete!"
    },
])
.then(function(input){
    
})
}
var gameWord = new word("basketball")
console.log("gameWord", gameWord);