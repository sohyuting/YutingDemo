var myOutputValue = "";

//Define players
var player1 = "player One";
var player2 = "player Two";

//gamestates
var gameStateDiceRoll = "game state dice roll";
var gameStateChooseDiceOrder = "game state choose dice order";

//set the initial state of game
var gameState = gameStateDiceRoll;

//array to store the rolled dice values
var diceRoll = [];

//Function to roll the dice and print the outcome
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  console.log("roll dice output: " + diceNumber);
  return diceNumber;
};

//Roll the dice 2 times and store into the rollDice array
var playerRollDice = function () {
  var counter = 0;
  for (var counter = 0; counter < 2; counter += 1) {
    diceRoll.push(rollDice());
  }
};

//if game state is Dice Roll, then roll the 2 dice and return the output value.
var main = function (input) {
  if (gameState == gameStateDiceRoll) {
    myOutputValue = playerRollDice();
    return myOutputValue;
  }

  if (gameState == gameStateChooseDiceOrder) {
    //validate input value.
    if (input != 1 && input != 2) {
      myOutputValue =
        "invalid input. Please enter 1 or 2 to decide on the order of which dice number should come first." +
        "Dice 1: " +
        diceRoll[0] +
        "Dice 2: " +
        diceRoll[1];
    }

    if (input == 1) {
      var player1 = Number(String(diceRoll[0]) + String(diceRoll[1]));
      myOutputValue =
        "You have decided the dice roll value to be " +
        diceRoll[0] +
        "and" +
        diceRoll[1] +
        `. your value is ${player1}`;
    }

    if (input == 2) {
      var player1 = Number(String(diceRoll[1]) + String(diceRoll[0]));
      myOutputValue =
        "You have decided the dice roll value to be " +
        diceRoll[1] +
        "and" +
        diceRoll[0] +
        `. your value is ${player1}`;
    }
    return myOutputValue;
  }

  //Player One combines the value

  //Player Two combines the value

  //Function to compare the value and return the results for win lose or draw

  return myOutputValue;
};
