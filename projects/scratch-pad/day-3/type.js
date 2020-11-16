// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    if(true === Array.isArray(value)){
        return true ;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
  // If it is an array then print false
    if(Array.isArray(value)){
        return false;
    
        // if it is undefined it is false
    } else if (value === null){
        return false;
    
        //if it is a date it is false
    } else if (value instanceof Date){
        return false;
// if it is an object then it is true 
    } else if (typeof value === "object"){
        return true;
    } else{
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value) || isObject(value)){
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
 // if the value is a string return 'string'
  if(typeof value === 'string'){
      return 'string';
 // if the value is an array return'array'
  }  else if(Array.isArray(value)){
      return 'array';
 // if the value is an object return 'object'
  } else if (isObject(value)){
      return 'object';
 // if the value is undefined return '' undefined
  } else if (value === undefined){
      return 'undefined';
 // if the value is a number return 'number'
  } else if (typeof value === 'number'){
      return 'number';
 // if the value is a boolean then return 'boolean'
  } else if (value === true || value === false){
      return 'boolean';
 // if the value is null return 'null'
  } else if (value === null){
      return 'null';
// if the value is a function return 'function'
  } else if ( value instanceof Function){
      return 'function';
 // if the value is a date return 'date'
  } else if (value instanceof Date){
      return 'date';
  }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
