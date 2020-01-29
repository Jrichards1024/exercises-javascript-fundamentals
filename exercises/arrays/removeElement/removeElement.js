/**
 * Given an array and an element, return a new array with all instances of the
 * given element removed.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - An array
 * @param {object} element - An element to remove
 * @returns {object[]} A copy of the input array with all instances of the given
 *   element removed.
 */
function removeElement(array, element) {
//   //for (let i = 0; i < array.length; i ++){
//     console.log(array.includes(element))
//     for (let i in array){
//       console.log(".5", i)
//     if (array[i] === element){
//       console.log("1.", array)
//       console.log("2.", i)
//       array = array.splice(0,1)
//       console.log("3.", array)
      
//     }
//   }
//   console.log(array)
//   return array
// }
  while (array.includes(element) === true) {
      for (let i in array){
    console.log(".5", i)
     if (array[i] === element){
   console.log("1.", array)
     console.log("2.", i)
    array = array.splice(0,1)
    console.log("3.", array)

  }
}
  }
  console.log("answer",array)
  return array
}




if (require.main === module) {
  console.log('Running sanity checks for removeElement:');

 console.log(removeElement([1, 1, 1], 1) === [])
 console.log(removeElement([1, 1, 2], 1) === [2])
 console.log(removeElement(['one', 'two', 'three'], 'two') === ['one', 'three'])
 console.log(removeElement(['Jesse', undefined, 'Farmer'], undefined) === ['Jesse', 'Farmer'])


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = removeElement;
