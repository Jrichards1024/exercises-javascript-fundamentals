/**
 * Given an input string, returns a ROT13 copy of the string.
 *
 * A substitution cipher is a method of encrypting an input string
 * by replacing each letter of the input with some other letter.
 *
 * ROT13 is a substitution cipher where each letter is replaced by
 * the letter that is 13 letters after it in the alphabet, wrapping
 * back to the start of the alphabet if necessary.
 *
 * For example, every instance of 'A' is replaced with 'N', 'M' with 'Z',
 * 'R' with 'E', and so on.
 *
 * See https://en.wikipedia.org/wiki/ROT13
 *
 * Play with: https://rot13.com/
 *
 * Because there are 26 letters in the alphabet, we can "decrypt" a
 * rot13-encrypted string by applying rot13 again.
 *
 * (No, this isn't particularly secure.)
 *
 * @example
 * rot13('Hello, world!'); // => 'Uryyb, jbeyq!'
 * rot13('Uryyb, jbeyq!'); // => 'Hello, world!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rot13(string) {
  for (let i = 0; i < string.length; i ++){
    if (string.charCodeAt(i) < 71){
      string = string
    }
    else {
    console.log("original letter and it's number: ", string[i], string.charCodeAt(i))  
    newNum = string.charCodeAt(i) + 13
    console.log("new letter: ",newNum)
    if (string.charCodeAt(i)< 90 && newNum > 90){
      newNum = newNum - 26
      console.log('newNum after subtraction', newNum)
    }
    else if (string.charCodeAt(i)< 122 && newNum > 122){
      newNum = (newNum - 122) + 96
    }
    
    //console.log(string[i])
    console.log("4 new letter as letter: ", String.fromCharCode(newNum))
    console.log("5 the string before change: ",string)

    string = string.replace(string[i],String.fromCharCode(newNum))
    console.log("6 new string: ", string)
    
  }
  }
  return string
}

if (require.main === module) {
  console.log('Running sanity checks for rot13:');
module.exports == rot13.js;
  //console.log(rot13('Hello, world!') == 'Uryyb, jbeyq!');
  console.log(rot13('Uryyb, jbeyq!') == 'Hello, world!');
  
}

module.exports = rot13;
