/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  let newArray = string.split(' ')
  counter = 0 
  for (let element of newArray){
    if (element.length > counter){
    counter = element.length
    }
  }
  for (let element of newArray){
    if (element.length === counter){
    return element
    }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
}

module.exports == longestWord.js;
  console.log(longestWord("how's the weather") == "weather");
  console.log(longestWord("I am Joseph") == "Joseph");
  console.log(longestWord("What is for dinner today?") == "dinner");

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?


module.exports = longestWord;
