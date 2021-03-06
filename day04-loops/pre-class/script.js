var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/////////////////////////////////////////////////

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";

  // Initialise the outer counter, outerLoopCounter
  var outerLoopCounter = 0;

  while (outerLoopCounter < input) {
    // Inside the outer loop, initialise the inner counter, innerLoopCounter
    var innerLoopCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (innerLoopCounter < input) {
      // Each time the inner loop runs, it adds "hello" to output
      myOutputValue = myOutputValue + `${innerLoopCounter}hello `;
      innerLoopCounter = innerLoopCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    outerLoopCounter = outerLoopCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

/////////////////////////////////////////////////

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
