const _ = {

    //numbers methods

    /*
    1 .clamp() 
    Clamps the number within the inclusive lower and upper bounds.
    First it takes three arguments: a number, a lower bound, and an upper bound;
    In second step .clamp() modifies the provided number to be within the two provided bounds;
    If the provided number is smaller than the lower bound, it will return the lower bound as the final number;
    If the number is larger than the upper bound, it will return the upper bound as the final number;
    If the number is already within the two bounds, it will return the number as the final number.
    */

    clamp (number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    

    /*
    2. inRange() 
    Checks if a number is between start and end, but not including the end;
    If end is not specified, it's set to start with start then set to 0;
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
    Splits string into an array of its words;
    First it takes one argument: a string; Then splits the string into an array of words;
    A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next;
    */

    words (string) {
        const words = string.split(' ');
        return words;
    },


    /* 
    4 .pad()
    Pads string on the left and right sides if it's shorter than length;
    Padding characters are truncated if they can't be evenly divided by length;
    Ittakes two arguments: a string and a length;
    .pad() adds spaces evenly to both sides of the string to make it reach the desired length;
    
    _.pad('abc', 8); returns '  abc   '.
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

    
    /*
    5 .has()
    .has() takes two arguments: an object and a key;
    It checks to see if the provided object contains a value at the specified key;
    .has() will return true if the object contains a value at the key and will return false if not;
    Your method does not need to accept the additional path parameter; we will only check for unnested values.
    */
    
    has (object, key) {
      let hasValue = object[key];
      if (hasValue != undefined) {
        return true;
      } return false;
    },
    

    /*
    6 .invert()
    Creates an object composed of the inverted keys and values of object.;
    If object contains duplicate values, subsequent values overwrite property assignments of previous values;
    Fisrt it takes one argument: an object;
    Than .invert() iterates through each key / value pair in the provided object and swaps the key and value.
    */

    invert (object) {
      let invertedObject  = {};
      for (let key in object) {
        const originalValue = object[key]
        invertedObject = {originalValue : key};
      }
       return invertedObject;
    },


    /*
    7 .findKey()
    First it takes two arguments: an object and a predicate function (a function that returns a boolean value);
    In next step it iterates through each key/value pair in the provided object and calls the predicate function with the value;
    .findKey() returns the first key that has a value that returns a truthy value from the predicate function;
    It will return undefined if no values return truthy values from the predicate function
    */

    findKey (object, predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue ) {
          return key;
        }
      }
      undefined 
      return undefined; 
    },


    //strings Methods


    /*
    8 .drop()
    Creates a slice of array with n elements dropped from the beginning.
    It takes two arguments: an array and a number representing the number of items to drop from the beginning of the array;
    Then it returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
    If the number of elements to drop is unspecified, your method should drop one element
    Take a look at the example below:    
    */

   drop (array, n) {
    if (n === undefined) {
      n = 1; // your method should drop one element, the number can't be unspecified.
    }
    let droppedArray = array.slice(n, array.length); 
    return droppedArray;
    },

    /*
    .slice() returns an copy of a part of an array starting with a subawway created between positions 'begin' and 'end'. The original array won't be modified. 
    */
    

    /*
    9 .dropWhile()
    It takes two arguments: an array and a predicate function;
    The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
    .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value.

    */

   dropWhile (array, predicate) { //two arguments 
    let cb = (element, index) => {
      return !predicate (element, index, array); //The predicate function takes three arguments
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop (array, dropNumber);
    return droppedArray; // new supplied array
    },
    
    /*
    .findIndex() navigates through all elements in the array and returns it's value when it returns true with the provided argument;    
    */

    /*
    10 .chunk()
    Creates an array of elements split into groups the length of size. 
    If array can't be split evenly, the final chunk will be the remaining elements.
    First it takes two arguments: an array and a size;
    .chunk() breaks up the supplied array into arrays of the specified size;
    Then it returns an array containing all of the previously-created array chunks in the order of the original array;
    If the array can’t be broken up evenly, the last chunk will be smaller than the specified size;
    If no size is supplied to the method, the size is set to 1
    */

   _.chunk(['a', 'b', 'c', 'd'], 2);
   // returns [['a', 'b'], ['c', 'd']]
    
   _.chunk(['a', 'b', 'c', 'd'], 3);
   // returns [['a', 'b', 'c'], ['d']]

   chunk (array, size = 1) { //first two arguments
      if (size === undefined) {
        size = 1; // checking if size returns undefined and setting it's value to 1;
      };
      let arrayChunks = []; // crates a new empty array that will receive the new chunked values;
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice (i, i+size); 
        arrayChunks.push(arrayChunks); //fill the new array with the new chunked values;
      }
      return arrayChunks
    },
  };

// Do not write or modify code below this line.
module.exports = _;