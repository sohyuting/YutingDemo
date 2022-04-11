var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  //Define the array
  var adjective = [];
  var myOutputValue = "";
  var found = false;

  // Loop over the names array, and set found to true if the input name already
  // exists in the names array
  var index = 0;
  for (var index = 0; index < adjective.length; index += 1) {
    var currentName = adjective[index];
    if (currentName == input) {
      found = true;
    }
  }
  // If no duplicate name was found, add the input name to the names array
  if (!found) {
    adjective.push(input);
    console.log(adjective);
  }
  var arrayLength = adjective.length;
  var randomAdj = function () {
    // create a random number from zero to array length minus one.
    // this number is in the range from the first
    // index (zero) to the last index (array length minus one)
    var randomIndex = Math.floor(Math.random() * arrayLength);
    return adjective[randomIndex];
  };
  var printAdjective = randomAdj();

  if (input == "create") {
    myOutputValue = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his  ${printAdjective}`;
  }
  return myOutputValue;
};

///////////////////////////////////////////////////////////////
var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var mode = "input mode";
var myOutputValue = "";
var adjective = [];
var found = false;
if (input == "input") {
  mode = "input mode";
  myOutputValue = "Enter adjectives";
}

//prompt to add adjective
if (mode == "input mode" && input !== "create") {
  var addAdj = function (input) {};
  var index = 0;
  for (var index = 0; index < adjective.length; index += 1) {
    var currentName = adjective[index];
    if (currentName == input) {
      found = true;
    }
  }
  // If no duplicate name was found, add the input name to the names array
  if (!found) {
    adjective.push(input);
    console.log(adjective);
  } else if (input == "create") {
    mode = "create mode";
  }
  if (mode == "create mode") {
  }
  var arrayLength = adjective.length;
  var randomAdj = function () {
    // create a random number from zero to array length minus one.
    // this number is in the range from the first
    // index (zero) to the last index (array length minus one)
    var randomIndex = Math.floor(Math.random() * arrayLength);
    return adjective[randomIndex];
  };
  var printAdjective = randomAdj();

  if (input == "create") {
    myOutputValue = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his  ${printAdjective}`;
  }
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
