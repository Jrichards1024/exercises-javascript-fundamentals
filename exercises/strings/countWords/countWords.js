/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  let newArray = string.split(' ')
  console.log(newArray.length)
  return newArray.length
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');
}

module.exports == countWords.js;
  console.log(countWords("hello my name is") == 4);
  console.log(countWords("joseph") == 1);
  console.log(countWords("What is for dinner today?") == 5);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

module.exports = countWords;
