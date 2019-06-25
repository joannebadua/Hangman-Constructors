var inquirer = require("inquirer");
var data = require("./word.js");

var lettersArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var answersArray = ["nike","adidas","puma"];
// choose word from answers array
// first, create an empty Array, use a forloop for everytime, 
//create a new letter object and push it into the empy array
var randomAnswerIndex = math.floor(math.random() * answersArray.length);
var randomAnswer;
var guessesLeft;

function startGame(){

    answersArray = [];
    for (var i = 0; i < answersArray[randomAnswerIndex].length; i++)
    {

    }
}

function userInput(){
    //inquirer to have the user input letter 
    inquirer.prompt
}

