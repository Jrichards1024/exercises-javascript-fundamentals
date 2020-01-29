/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function remainderOf(num1,num2){
  let quotient = num1 / num2; 
  roundedDown = Math.floor(quotient);
  return (num1 - (roundedDown *num2))
  }
  /*
    This is your job. :)

    If you're not sure, step out of the code and use pen + paper. Start
    with simple examples and pay attention to the process you carry out.
  */


if (require.main === module) {
  console.log('Running sanity checks for remainderOf');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = remainderOf;
  console.log(remainderOf(10, 1)); // => 0)
  console.log(remainderOf(10, 2)); // => 0)
  console.log(remainderOf(10, 3)); // => 1)
  console.log(remainderOf(10, 4)); // => 2)
  console.log(remainderOf(129, 17)); // => 10)
