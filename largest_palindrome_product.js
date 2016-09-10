/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  var palString;
  var palLength = (digits * 2) - 1;

  test_factor = (1 * Math.pow(10, digits)) - 1;

  for(let j = test_factor; j >= 0; j--) {
    for(let i = test_factor; i >= 0; i--) {
      let palindromeCheckNumber;
      palindromeCheckNumber = i * j;
      if(isPalindrome(palindromeCheckNumber))
      {
        if(palindromeCheckNumber > palindromeNumber) {
          palindromeNumber = palindromeCheckNumber;
          factor_0 = i;
          factor_1 = j;
          break;
        }
      }
    }
  }

  function isPalindrome(n){

    let palString = n.toString();
    let palArray = palString.split('');
    let reverseArray = palString.split('').reverse();
    let palFound = false;

    for (let i = 0; i < palArray.length; i++)
    {
      if(palArray[i] === reverseArray[i]) {
        palFound = true;
      } else {
        palFound = false;
        break;
      }
    }

    return palFound;
  }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};