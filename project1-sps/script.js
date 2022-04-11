//yuting's code
//Keep track of win/lose records
var computerWinCount = 0;
var userWinCount = 0;

var main = function (input) {
  var myOutputValue = "hello world";

  //user inputs scissors, paper, stone.
  //if user input is not scissors, paper or stone, to inform user that input is invalid.

  var validateInput = function () {
    if (input !== "scissors" && input !== "paper" && input !== "stone") {
      myOutputValue =
        "input is invalid. Please key in scissors, stone or paper";
      return myOutputValue;
    }
  };

  //Computer randomly generates 1,2 or 3 (scissors, paper or stone)
  var generateComputerGuess = function () {
    var possibleGuess = 3;
    var randomNum = Math.floor(Math.random() * possibleGuess) + 1;

    //system maps 1, 2, and 3 to scissors, paper and stone to 1,2, and 3
    if (randomNum === 1) {
      return "scissors";
    }
    if (randomNum === 2) {
      return "paper";
    }
    return "stone";
  };

  var computerGuess = generateComputerGuess();

  //START CHECKING GAME LOGIC
  //RUN THE DRAW LOGIC
  //if computer == input, user draw. Return Draw message
  if (computerGuess == input) {
    myOutputValue = `This is a draw. You and the computer guessed ${input}`;
  }

  //else RUN SCISSORS LOGIC
  //if computer scissors and user paper, user lose. return lose message and computer win count +1; user win count - 1
  if (computerGuess == "scissors" && input == "paper") {
    computerWinCount += 1;
    userWinCount -= 1;
    myOutputValue = `You guess ${input} and computer guessed ${computerGuess}. You lose. 
    The computer win count is ${computerWinCount} and your win count is ${userWinCount}.`;
  }
  //else if computer scissors and user stone, user wins. return win message and computer win count -1; user win count +1
  if (computerGuess == "scissors" && input == "stone") {
    computerWinCount -= 1;
    userWinCount += 1;
    myOutputValue = `You guess ${input} and computer guessed ${computerGuess}. You win. 
    The computer win count is ${computerWinCount} and your win count is ${userWinCount}.`;
  }

  //else RUN STONE LOGIC
  //if computer stone and user scissors, user lose. return lose message and computer win count +1; user win count - 1
  if (computerGuess == "stone" && input == "scissors") {
    computerWinCount += 1;
    userWinCount -= 1;
    myOutputValue = `You guess ${input} and computer guessed ${computerGuess}. You lose. 
    The computer win count is ${computerWinCount} and your win count is ${userWinCount}.`;
  }
  //if computer stone and user paper, user win. return win message and computer win count -1; user win count +1
  if (computerGuess == "stone" && input == "paper") {
    computerWinCount -= 1;
    userWinCount += 1;
    myOutputValue = `You guess ${input} and computer guessed ${computerGuess}. You win. 
    The computer win count is ${computerWinCount} and your win count is ${userWinCount}.`;
  }

  // else RUN PAPER LOGIC
  //if computer paper and user stone, user lose. return lose message and computer win count +1; user win count - 1
  if (computerGuess == "paper" && input == "stone") {
    computerWinCount += 1;
    userWinCount -= 1;
    myOutputValue = `You guess ${input} and computer guessed ${computerGuess}. You lose. 
    The computer win count is ${computerWinCount} and your win count is ${userWinCount}.`;
  }

  //if computer paper and user scissors, user win. return win message and computer win count -1; user win count +1
  if (computerGuess == "paper" && input == "scissors") {
    computerWinCount -= 1;
    userWinCount += 1;
    myOutputValue = `You guess ${input} and computer guessed ${computerGuess}. You win. 
    The computer win count is ${computerWinCount} and your win count is ${userWinCount}.`;
  }
  return myOutputValue;
};
