/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  let counter = 0
  for (let i of string) {
    if ( i == letter) {
      counter = counter + 1 
    } 
    

  
  } 
  return counter
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  console.log(countLetter('Mississippi', 's') === 4);
  console.log(countLetter('a','a') === 1);
  console.log(countLetter('aaaa','a') === 4);
  console.log(countLetter('aaaa','Q') === 0);
  console.log(countLetter('aaba','a') === 3);
  
}

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?


module.exports = countLetter;

