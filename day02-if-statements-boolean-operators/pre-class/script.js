var orangeJuiceMain = function (guestNumber, glassPerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  //inputs number of guests for party
  //number of glasses of orange juice = number of guest x 2
  //number of oranges  = number of glasses of orange juice x 4
  var orangeNumber = guestNumber * glassPerGuest * 4;
  //output number of oranges required
  var myOutputValue = `${orangeNumber} oranges are needed.`;
  return myOutputValue;
};

var paintMain = function (numRooms, numCoats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var paintedArea = numRooms * 3 * 3;
  var paintLitres = paintedArea / 300 * numCoats;

//assume one litre of paint costs $1
  var myOutputValue = "the price involved is "$(paintLitres) ";
  return myOutputValue;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
 
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Personalise the output
  var myOutputValue = 'You just rolled a ' + randomDiceNumber + '!';

  // Return and print output.
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue
  var myOutputValue = 'the door shall not open.';
  // If input is our secret phrase, change the value of myOutputValue
  if (input == 'palatable papaya') {
    myOutputValue = 'you wrote the secret phrase!';
  } else if (input == 'not so palatable papaya') {
    myOutputValue += ' but you are nearly there.';
  } else {
    myOutputValue += ' nope, this is far from the right phrase.';
  }
  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
   // Generate a random dice number
   var randomDiceNumber = rollDice();

   // Default output value is 'you lose'.
   var myOutputValue = 'you lose';
 
   // If input matches randomDiceNumber, update output.
   if (input == randomDiceNumber) {
     myOutputValue = 'you win';
   }
   // Return output.
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDiceNumber = rollDice();
  var doubleGuess = guess * 2;
  var myOutputValue = `You guessed ${guess} and rolled ${randomDiceNumber}.`;

  if (doubleGuess == randomDiceNumber) {
    myOutputValue += ' You win!';
  } else {
    myOutputValue += ' You lose!';
  }

  return myOutputValue;
};
