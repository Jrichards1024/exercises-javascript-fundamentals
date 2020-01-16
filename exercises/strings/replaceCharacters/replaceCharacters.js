/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  //console.log(Object.keys(replacementDict))
  for (let element of string){
    for (let i of Object.keys(replacementDict)){
      if (element === i){
        string = string.replace(element, replacementDict[i])
    }
    }
    }
    return string
    }

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');
  }
module.exports == replaceCharacters.js;
  console.log(replaceCharacters("Hello", {'H': 'y', 'l': '8'} ) == "ye88o");
  console.log(replaceCharacters("Beyonce", {'o':'g', 'n':'o','c':'n'}) == "Beygone");

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?


module.exports = replaceCharacters;
