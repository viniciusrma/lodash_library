const _ = {

    //numbers methods

    //1 .clamp() Clamps the number within the inclusive lower and upper bounds.
    clamp (number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    
    /*
    2. inRange() 
    Checks if a number is between start and end, but not including the end
    If end is not specified, it's set to start with start then set to 0. 
    If start is greater than end the params are swapped to support negative ranges.
    */

    inRange (number, start, end) {
      if(end === undefined) {
        end = start
        start = 0
      } 
      if(start > end) {
        var temp = end
        end = start
        start = temp
      }
      var isInRange = start <= number && number < end
      return isInRange
    },
    
    //strings Methods

    /* 
    3 .words() 
    Splits string into an array of its words. 
    A word is defined by a space-separated string of characters, so each space character, ' '
    indicates the end of one word and the start of the next
    */

    words (string) {
        const words = string.split(' ');
        return words;
    },

    /* 
    4 .pad()
    Pads string on the left and right sides if it's shorter than length. 
    Padding characters are truncated if they can't be evenly divided by length.
    
    _.pad('abc', 8); returns '  abc   '
    */
    
   pad (string, length) {
    if (lenght <= string.length) {
      return string
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
    },
    
  };

// Do not write or modify code below this line.
module.exports = _;