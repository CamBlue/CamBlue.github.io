/**
 * 
 * OPERATORS -- Taking Action on Values
 * Operators in Javascript are used to act on our data! We use them whenever we 
 * are assigning a variable, comparing data, or using data in an arithmetic 
 * operation. 
 * Operators are classed by what they do and how many operands they require.
 * An operand is just a code word for the values that Operators are acting on
 * Unary operators work with one value, Binary with two, and Ternary with three.
 * 
 * There are 7 Kinds of Operators:
 * ASSIGNMENT OPERATORS
 * COMPARISON OPERATORS
 * ARITHMETIC OPERATORS
 * LOGICAL OPERATORS
 * STRING OPERATORS
 * CONDITIONAL (TERNARY) OPERATORS
 * UNARY OPERATORS
 */
 
 /**
  * Assignment Operators are used to assign values to 
  * variables or other data types.
  * =, +=, -=, *=, /=, %=.
  */
 var equalTo = 9;
 /* Here we are using the = operator, it is assigning whatever is to the right 
    to the variable on the left.
 */
 
equalTo += 1; // this adds 1 to the variable equalTo.

equalTo -= 2; // this subtracts 2 from equalTo.

equalTo *= 2; // This sets equalTo to equal 9 * 2.

equalTo /= 3; //  This set equalTo to the divison of 9/3.

equalTo %= 3; // This sets equalTo to the remainder of 9/3.


/**
 * Comparison Operators are used to compare to values and evaluate the comparison
 * of those to values to a Boolean value. (True or False).
 * >, <, <=, >=, ==, ===, !=, !==.
 */
 console.log(3 < 2); // This will print False.
 
 console.log(4 >= 4); // This will print true because 4 is equal to 4.
 
 console.log(5 === 6); // This will print false because 5 is not equal to 6.
 
 console.log('Cameron' == 'Blue');// This will print true because they are both strings.
 
 
 /**
  * Arithmetic Operators are used to act upon values to produce new values
  * Arithmetic Operators include +, -, *, /, %, --, ++.
  */
 console.log(5 + 7); // This produces the new value of 12.
 
 console.log(10 - 9); // Produces the new value of 1.
 
 console.log(15 * 3); // Produces the new value of 45.
 
 console.log(20 / 5); // Produces the new value of 4.
 
 console.log(100 % 10); // Produces the remainder of 100 and 10 which is 10.
 
 
 /**
  * Logical Operators 
  * &&, ||, !.
  */
 // You can use && when you require two conditions to resolve to the same thing.
console.log(42 > 10 && 4 < 9); // This resolves to True.
  
// You can use || when you require only one of the conditions to resolve to true.
console.log(10 < 5 || 20 > 4);// Will resolve to true because one of them is true.

// You can use the Bang operator (!) to flip the truthness of a value.
console.log(!true); // This will print false 


/**
 * Unary Operators only require one operand to resolve itself.
 * One example is the delete operator.
 */
 var thisObj = {name: 'cameron'};
 
 console.log(delete thisObj.name);// This will return an empty Object.
 
 
 /**
  * There is only one Ternary Operator in Javascript and it is the 
  * condition operator. A ternary operator as we said before takes 3
  * operands to be able to resolve itself.
  */
  //The syntax for this: variablename = (condition) ? value1:value2;
  var age = 17;
  
  var voteable = (age < 18) ? 'Too young' : "Old Enough"; 
  // this would print 'Too young', because age is not greater than 18.