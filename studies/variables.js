/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**CONSTANTS
 * Whenever we want to have a variable that stays 'constant' or in other words can't be re-assigned
 * we use the keyword const.
 * 
 * You always have to assign a constant to a value immediately
 * It will not work if you leave the variable undefined or with no value
 * 
 * Constants are also what we call BLOCK SCOPED. 
 * This means that if a constant is declared and assigned inside of a code block that isn't in global scope
 * it cannot be seen by anything outside of that block of code.
 */
 
//1. DECLARAZTION & ASSIGNMENT
//As we said whenever you declare a constant with the CONST keyword you must immediatley assign it a value.

const forever = 'I cannot change';
console.log(forever); // This will print 'forever'

const number = 8;
console.log(number);// This will print 8

const bool = true;
console.log(bool); // This will print true

const arr = [];
console.log(arr);// THis will print an array literal 

//  forever = 10; // THIS WILL NOT WORK REMEMBER CONSTANTS CAN NEVER BE RE ASSIGNED.


/**
 * LETS
 * Let's say we wanted to assign a variable to a value, which can be re-assigned but also doesn't get hoisted into the global scope,
 * of our program.
 * In this case we would use the keyword LET to declare a variable.
 * LET variables can be left un assigned and can go without being assigned to a value which of course
 * would return undefined.
 */
 
 //1. DECLARING- this is where we declare that there is a variable but give it no value
 let last;
 console.log(last); // prints ==> undefined.

 //2. ASSIGNMENT- whenever assigning let to a variable remember to always use =
  let name = 'Cameron'; 
  console.log(name);// prints 'Cameron' to the console.
  
  //3. RE-ASSIGNMENT- We can re assign let variable because they are not constants.
  name = 'cameron';
  console.log(name);// This will print 'cameron' 
 
 
 
 
 