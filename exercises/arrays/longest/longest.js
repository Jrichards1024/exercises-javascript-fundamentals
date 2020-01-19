/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  counter = 0 
  for (let element of array){
    if (element.length > counter){
    counter = element.length
    }
  }
  for (let element of array){
    if (element.length === counter){
    return element
    }
  }
}


if (require.main === module) {
  console.log('Running sanity checks for longest:');

module.exports == longest.js
  console.log(longest(["my", "name","is"]) == "name");
  console.log(longest(["Beyoncé","is","great"]) == "Beyoncé");
  console.log(longest(["What's", "for", "dinner?"]) == "dinner?");
}

module.exports = longest;
