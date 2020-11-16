/**
 * DATA TYPES
 * SIMPLE/PRIMITIVE DATA TYPES
 * In Javascript there are many kinds of data types, both complex and simple
 * In this section of our studies we are going to discuess 
 * simple data types and complex.
 * 
 * Simple data types include:
 * Numbers
 * Booleans
 * Strings
 * NaN (This simply means Not a Number)
 * undefined
 * null (This simply means there is no value)
 * 
 * Simple data types are simple because they are immutable,
 * or they cannot collect other values,
 * also whenever you use operations on a simple data type, 
 * it returns a NEW simple value.
 * In other words they can never be changed
 * Another difference in complex and simple data types is that 
 *          whenever assigning 
 * a simple data type to a variable, it is actually held in the variable.
 * A variable can only reference complex data types.
 * 
 * 
 * 
 * 
 * Complex data types include:
 * Arrays
 * Objects
 * Functions
 * 
 * The reason we consider Arrays, Functions, and Objects complex dara types is that they
 * can be any size. Objects can contain any amount of key/value pairs, functions can 
 * contain any number of statements, and Arrays can contain any numbers of elements.  
 * We can also loop through Objects and Arrays using Loops!
 * 
 * 
 * 
 * 
 */
 
 // NUMBERS -- Simple Data Type -- Numeric Data
 var num1 = 4;
 var num2 = 6;
 
 console.log(num1); // This will log 4 to the console
 
 var sum = num1 + num2;   /**Here we are using an operator on two numbers which
                                are simple data types,
                                this will return a new simple value!*/

 console.log(sum); // This will print 10;
 
 var num3 = 2;
 var orderOfOp = num1 + num2 / num3;
 console.log(orderOfOp);     /* This will print 5 to the console. Whenever you use 
                                multiple operators in one line 
                                 Javascript follows the order of operations.
                                                                    */


 // STRINGS -- Simple Data Type -- Character or Textual Data
 var str1 = 'Cameron ';
 console.log(str1); // This will return the string of 'Cameron';
 
 var str2 = 'Blue';
 
 var fullName = str2 + str1; // We can concatenate strings together using the + operator!

 console.log(fullName); // This will print the value of fullName which is 'Cameron Blue'
 
/**
 * We can also access individual characters in string! All strings are 0 Indexed,
 * this means that we can access them by calling the variable we have stored to
 * it and then use bracket notation [].
*/
 console.log(fullName[3]); // this will return the string of 'e'.
/**
 * We can also use methods on strings, one method we can use to see how long a 
 * string is, is called .length.
*/
 console.log(fullName.length); // this will return the number 11. 
 console.log(fullName.length - 1);// This will return the last character in a string.
 
 
 // BOOLEANS -- Simple Data Type -- True or False
 /**
  * Booleans are used to test if something is a value or not.
  * They are usually used in if/else statements which I will discuss later in 
  * my studies!
 */
 var isTrue = true;
 console.log(isTrue); // this will print the value of true to the console.
 var isFalse = false;
 console.log(isFalse); // this will print the value of false to the console.
 
 
// UNDEFINED -- Simple Data Type -- Primitive Value
/**
 * Undefined is a primitive value in Javascript that prints whenever a value 
 * is either not referenced correctly, doesn't exist in the scope of the call, 
 * or just doesn't exist at all
*/
var nothing = undefined; 
console.log(nothing); // This will print undefined to the console

var something;
console.log(something) /**
          *This will also print undefined to the console    
          * because something even though it is being declared
          * it isn't intialized or in other terms, assigned
          * a value
                                        */

// INFINITY AND -INFINITY -- Simple Data Type -- Numeric Value
/**
 * Infinity and -Infinity are brought to the table whenever
 * a numeric value is either exceeding the upper or lower limit 
 * of floating point numbers. Ex. 1.797693134862314E+308
 *                            Ex 2. -1.79693134862314E+308
*/

console.log(Infinity > 100);/*This would  return true because Infinity is 
                              bigger than any finite number.
*/

console.log(2 / 0); // Dividing a finite number by 0 produces Infinity

console.log(-Infinity < 100); // This would return true

console.log(Infinity === -Infinity); /* Infinity and -Infinity are equal value 
                                     because an infinite value equals to an infinite value
  */
  


// ARRAYS -- Complex Data Type -- Collection
/**
 * An Array is a complex Data Type, meaning it can hold and aggregate other values.
 * These values can include Numbers, Booleans, Strings, other Arrays, Objects,
 * and Functions. All Arrays are 0 Indexed, this means that if you were trying to
 * refer to a value inside of the array you would use the index or 'placement'
 * of that value to access it.
 * 
 */
var myArray = [];
console.log(myArray);
/*
This is called an Array Literal! You must always use brackets whenevr
creating an Array. It would print [] to the console.
*/

/**
 * What I think is the best thing about Arrays is all the different methods 
 * you can use to access and manipulate its contents. What im referring to as 
 * methods are built in functions in Javascript that we can use on our data.
*/

myArray = ['Cameron', {ourObj: 'Blue'}, 7, true];

// Push Method -- Takes one or more argument and adds to end of an Array.
myArray.push(9, 32, 'Lois'); 
console.log(myArray);
// This would print ['Cameron', {ourObj: 'Blue'}, 7, true, 9, 32, 'Lois'];


//Pop Method -- Removes the last element and returns it.
console.log(myArray.pop());
// This would print 'Lois';


/*IndexOf -- Returns first index in which the argument is found in the Array.
             Returns -1 if the argument is not present.
*/
console.log(myArray.indexOf(7));
// This would print 2 because 7 is at the 2nd index value.


// Shift Method -- Removes and Returns first element in an Array.
console.log(myArray.shift());
// this would return 'Cameron' because it is the value at the 0 index.


//Unshift Method -- Adds a given element to th beginning of an Array
console.log(myArray.unshift('I am'));
// This would add 'I am', to the 0 index of myArray.


/* Splice Method -- Removes or replaces existing elements and/or adds new
                  elements to an Array
*/
console.log(myArray.splice(1, 1));// This would remove 7 from myArray.
console.log(myArray.splice(2, 0, 'Content'));/* This would add 'content to the
   2nd index in myArray.
*/


/** Length Method -- This method returns the number of values that are stored
 * inside an array. 
*/

console.log(myArray.length); // This would return 4

// We can also retrieve the last element in an Array using .length - 1.
console.log(myArray.length - 1); // This would return 32.

// isArray() -- We can test if an Array is an actual Array by using isArray().

console.log(Array.isArray(myArray));// This would print true.



/**
 * OBJECTS -- Complex Data Type -- Collection
 * 
 * Objects are kind of like Arrays in the sense that they collect and aggregate
 * other values. They can hold all the same values an Array can, but in an object,
 * we refer to the placement or'index' of a value by key/value pairs. Whenever
 * thinking about this, you can think of the Key as the position of the value
 * in this given object. 
 */
 
 var myObject = {}; // This is a variable being assigned to an Object LITERAL.
 console.log(myObject); // This would print undefined to the console.
 
 /* You can add key/value pairs to Objects on the go! All you have to do is 
   name the value and "push" them into our Object. Unfortunately Objects do not
   have methods we can use on them so this is how we add new key/value pairs to 
   our objects.
 */
 
 // You must call the object and then use DOT notation to add key/values to it.
 myObject.firstName = 'Cameron';
 myObject.lastName = 'Blue';
console.log(myObject)// This would print {firstName: 'Cameron', lastName: 'Blue'};

/**
 * Keys are essentially strings also! This means you can access individual 
 * elements in an object using bracket notaion and providing the key as a string.
 */
 
 console.log(myObject['firstName']); // this would print 'Cameron'.
 
 // You can also delete key/value pairs in an object
 delete myObject.lastName; 
 console.log(myObject.lastName); // This would print undefined because it was deleted
 
 // You could also return all the keys in an object 
 console.log(Object.keys(myObject)); // This would print ['firstName', 'lastName'];
 
 /** You could get the length of an object by using Object.keys() also and then
  * use the .length method on the array that Object.keys() inheriently returns.
  */
  console.log(Object.keys(myObject).length); // This would print 2;
  
  
  
  /**
   * Functions -- Compelx Data Type -- Reusable Code
   * I will cover Functions in a different section later in my studies but for 
   * now just know that Functions are a data type in Javascript that encapsulates
   * a block of code and then can execute that block of code anywhere by 
   * invoking the name of the function and giving it an argument to act upon
   * Functions have names which are use to call the function when needed.
   * They also have parameters which are used as placeholders for arguments
   * you are going to pass into your function
   * It then has a block of code that usually performs a task or 'function' 
   * that returns a value. 
   */
   
   // Function Definition
   function add (num1, num2){
      num1 + num2;
   };
 /* Here we are simply naming our function and giving it parameters. The keyword
    function declares that what is following is in fact a function.
 */
 
 //Calling a Function
 /*You can call a function anytime you want be referring to the name of it 
 and then passing to if the number of arguments it requires to operate. 
 */
 console.log(add(5, 6)); // this returns 11 
 
 /**
  * Whenever we are passsing valeus into a function it is important to remeber
  * the difference between how we are using our data types. Whenever you are 
  * passing a primitive value to a function you are passing it by COPY, and 
  * whenever you are passing a complex value to a function they are by reference.
  * The difference here is that a primtive value is passed by Copy because 
  * primitive values cannot be changed, or in other words they exist permanetly
  * in Javascript. Whenever reffering to a complex value inside of a function 
  * you are referring to the values that can be manipulated if chosen so. You 
  * are just referring to the place where the values you want to access are stored,
  * this is different than COPY value because when referring to a primitive value
  * you are refferring to the actual value of what you are passsing.
  */