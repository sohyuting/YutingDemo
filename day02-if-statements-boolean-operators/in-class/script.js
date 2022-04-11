var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 9;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  //accept user guess
  //roll two dice (dice 1 and dice 2)
  var diceOne = 3;
  var diceTwo = 7;
  var diceTotal = diceOne + diceTwo;
  console.log(diceTotal);
  var myOutputValue = "hello world";
  //if user's guess matches dice 1 or dice 2, return you win
  if (input == diceOne || input == diceTwo) {
    myOutputValue = "You win.";
    console.log("test 1");
    //else if dice 1 + dice 2 = 11, return you win
  } else if (diceTotal == 11) {
    console.log("test 2");
    myOutputValue = "You win.";
    //else return you lose
  } else {
    console.log("test 3");
    myOutputValue = "You lose.";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  //player inputs single digit
  //computer generates 4 random digits between 0 and 9
  var comDigit1 = rollDice();
  var comDigit2 = rollDice();
  var comDigit3 = rollDice();
  var comDigit4 = rollDice();
  console.log("test 1");
  //if player input matches any of the 4 digits, return you win
  if (
    input == comDigit1 ||
    input == comDigit2 ||
    input == comDigit3 ||
    input == comDigit4
  ) {
    myOutputValue = "You win";
    console.log("test2");
  } else {
    myOutputValue = "You lose";
  }
  //print the player's guess and the generated digit
  return (myOutputValue += `${input} + ${comDigit1} + ${comDigit2} + ${comDigit3} + ${comDigit4}`);
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
