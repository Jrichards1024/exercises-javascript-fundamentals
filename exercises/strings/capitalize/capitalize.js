/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  newLetter = string[0].toUpperCase()
  restOfLetter = string.slice(1)
  return newLetter + restOfLetter
  }
  // This is your job. :)


if (require.main === module) {
  console.log('Running sanity checks for capitalize');
}
module.exports == capitalize;
  console.log(capitalize("hello") == "Hello");
  console.log(capitalize("joseph") == "Joseph");
  console.log(capitalize("beyoncé") == "Beyoncé");

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?


module.exports = capitalize;
