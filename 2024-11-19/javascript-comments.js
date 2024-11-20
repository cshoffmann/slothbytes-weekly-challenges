// INSTRUCTIONS
// In JavaScript, there are two types of comments:
// Single-line comments start with //
// Multi-line or inline comments start with /* and end with */
// The input will be a sequence of //, /* and */. Every /* must have a */ that immediately follows it. To add, there can be no single-line comments in between multi-line comments in between the /* and */.
// Create a function that returns True if comments are properly formatted, and False otherwise.

function commentsCorrect(input) {
  // If the input string length is odd, return false
  if (input.length % 2 !== 0) {
    return false;
  }

  // Initialize the result array to hold the pairs
  let result = [];

  // Loop through the string in steps of 2 to create pairs
  for (let i = 0; i < input.length; i += 2) {
    let pair = input.slice(i, i + 2); // Get the pair of characters
    result.push(pair); // Add the pair to the result array
  }

  // Loop through the pairs to check if they are properly formatted
  for (let i = 0; i < result.length; i++) {
    let pair = result[i];
    let nextPair = result[i + 1];

    // If the input is not "//", "/*", or "*/", return false
    if (pair !== "//" && pair !== "/*" && pair !== "*/") {
      return false;
    }

    // When a pair /* is found, it must be followed by */
    if (pair === "/*" && nextPair !== "*/") {
      return false;
    }
  }

  // If script reaches this point, return true
  return true;
}

// Expected output = True
console.log(commentsCorrect("//////"));
// Expected output = True
console.log(commentsCorrect("/**//**////**/"));
// Expected output = False
console.log(commentsCorrect("///*/**/"));
// Expected output = False
console.log(commentsCorrect("/////"));
