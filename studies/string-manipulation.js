/**
 * 
 * STRING MANIPULATION
 * In Javascript when you have a primtive value like a string, it cannot have 
 * properties or methods, but also in Javascript there are methods and properties
 * that are available to primitive values. This is because Javascript treats
 * primitive values as objects when executing methods and properties
 * 
 * We can use both String Methods and Operators to manipulate strings!
 */
 
 // Performing on Strings with Operators.
 
 // Concatenate Operator
 console.log('Cameron' + ' ' + 'Blue');/*
  This will print 'Cameron Blue' to the console because we are adding the strings
  together using the + operator! This is also known as Concatenating Strings.
 */
 
 
 // Using String Methods
 
 // Length Method
 // This method returns the length of the given string.
var str = 'str1';

 console.log(str.length); // This will return 3. Strings are 0 indexed.
 
 // IndexOf Method
 // This method returns the index of the given text.
 console.log(str.indexOf('t')); // This would print 1 to the console.
 
 // lastIndexOf Method
 // This method returns the last occurence of an index with the specified text
 console.log(str.lastIndexOf('s')); // This would return 0. 
 
 // Search Method
 /* This method searches a string for a specified value and returns the position
 of the match.
 */
 console.log(str.search('1'));// this would return 3 
 
 /**
  * Notice that indexOf() and search() are equal. They both take the same arguments 
  * and return the same values. the difference is that search() canot take a
  * second argument, and return the same value. indexOf() cannot take powerful
  * search values (regular expressions).
  */