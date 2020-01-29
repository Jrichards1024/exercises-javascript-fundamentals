/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

  function shortestWord(string) {
    let newArray = string.split(' ')
    counter = 100
    for (let element of newArray){
      if (element.length < counter){
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
  
  module.exports == shortestWord.js;
    console.log(shortestWord("We are here") == "We");
    console.log(shortestWord("I am Joseph") == "I");
    console.log(shortestWord("What is for dinner today?") == "is");
  
    // Add your own sanity checks here.
    // How else will you be sure your code does what you think it does?
  
  
  module.exports = shortestWord;
  
