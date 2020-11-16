/**
 * CONTROL FLOW
 * Controlling the Flow of an Application
 * 
 * Whenever we are discussing control flow we are talking about making decisons
 * in our code and executing certain code to run based on if values resolve
 * to be true or false. 
 * 
 * We can do this through conditional statements. Conditional Statements are
 * usually written in if statements and their chains, if-else if -else.
 * Otherwise we could also use a switch statement which is similar.
 * 
 * 
 */
 
 // IF Statement
 // Syntax : if( condition) { run if true};
 
 if(9 > 6){
     return true;
 }
 // This code will return true because our condition statement is True.
 
 
 
 
 
 // Else - IF Statement
 /*Syntax: if(condition1){
     this code will run
 } else if(condition2){
     this code will run
 };
 */
 
 if(true === false){
     return true;
 } else if (9 > 3){
     return 'Correct';
 };
 /* This would return 'Correct' because true is not equal to false, so then our
 else if statement will execute if our 2nd condition is true.
 */
 
 


 
 
 // Else Statement 
 /** Syntax:  if(codition1){
  *   return true;
    * } else if (conditon2){
    * return true
    * } else {
    * return 'Nothing';
 }
 */
 
 var isTrue1 = true;
 if(isTrue1 === false){
     return false;
 } else if(Array.isArray(isTrue1)){
     return false;
 } else{
     return true;
 }
/* This would return true because none of the conceeding conditional statements
 *  are true so it will execute until it reaches a condition it can execute.
*/





// Switch Statements
/**
 * Reasoning behind using Swtich statements rather than a if-else else-if chain
 * is that Switch stamenets make-up for cleaner code. It simply looks better.
 * A swtich statment executes the same way as an if-else chain but uses different
 * key words to execute what needs to be done.
 *
*/

var animal = 'Monkey';

switch(animal){
    case 'Deer':
        return 'The animal is a Deer';
 case 'Giraffe':
    return 'The animal is a Giraffe';
    case 'Monkey':
        return 'The animal is a Monkey';
}
// This would return 'The animal is a Monkey'.