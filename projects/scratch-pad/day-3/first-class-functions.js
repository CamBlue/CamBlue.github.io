// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function with value parameter
    return function(value){
      // if the value argument is greater than the base return true
        if (value > base){
        
            return true;
// if the value argument is less than the base return false.
        } else {
   
            return false;
     
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
        if(base > value){
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function (str){
    // Testing wether the first index of a given string is the same as starstWith no matter if lower case or uppercase.
        if(str[0].toUpperCase() === startsWith || str[0].toLowerCase() === startsWith){
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
  return function (str){
     
     // Test whether the last index of a string wether upper or lower case is equal to endsWith.
      if(str.charAt(str.length - 1).toUpperCase() === endsWith || str.charAt(str.length - 1).toLowerCase() === endsWith){
          return true;
      } else{
          return false;
      }
  } ; 
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
// Strings is an array of strings
//Modify is a function that takes a string and returns the string in upper case.

// I need to run the modify function on each string in the array and return an array of modified strings.
//First we need to create the array for modified strings

 
// we need to loop through the original parameter of strings.
for(var i = 0; i <= strings.length -1; i++){
   
 // call modify for each string inside of strings array.
  strings[i] = modify(strings[i]);
}
 
 
return strings;
}
    
    
    
    
    // YOUR CODE ABOVE HERE //


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
   // We need to loop over the array
   for(var i = 0; i <= strings.length - 1; i++){
       // we need to pass each index to the test
       // What we are doing here is testing every string in our array aginast test and if they all resolve to pass the test 
       // then it will return true, even if one string does not pass it will return false.
        if(strings.every(test)){
            return true;
        } else {
            return false;
        }
    
    
    
    // YOUR CODE ABOVE HERE //
}
    
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}