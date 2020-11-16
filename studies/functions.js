/**
 * FUNCTIONS
 * 
 * Functions in Javascript are a type of data that encapsulates reusable code.
 * We can use this code on values that we pass into our functions as arguments
 * to resolve to new values.
 * 
 * You can also thin kof functions as a set of instructions that you can execute
 * at any time after declaring and defining it.
 * 
 * The basic syntax of a  Named function is : Function functionName(par1, par2){
                                                     // Code Block
                                                        };
 * 
 * Whenever you pass values into a function when invoking it these values are
 * arguments taking the place of the parameters we set in the function. The main
 * difference between parameters and arguments, is that parameters are just 
 * placeholders that we will have for whenever we want to use our function.
 * 
 */
 
 // Assigning a Function to a variable
 
 var myFunc = function(){ 
  var say = "hello";
   console.log(say);  
 };
/**
 * We can assign functions to variables by declaring and intializing 
 * a variable and assigning it to the function.
*/


/**
 * Whenever creating your function, you can optionally use Inputs or Outputs,
 * this means that by default and function outputs a default value also.
 * In the above function assigned to myFunc, we are taking 0 inputs and 
 * specifying and output with console.log(). You can also specify a output
 * value with the return keyword. 
 */
 function add(num1, num2){
    return num1 + num2;
 }
 /**
  * So in our add function we just created we specifyed 2 inputs of num1 and num2
  * and then specified a output by using the return keyword, followed by what we
  * wanted to output.
  */


/**
 * Functions can only modify variablers in the parent/global scope.
 * What this means is that inside a function you can only reference or copy values
 * that are declared in the global scope or if the function is inside of a parent
 * block of code, we can use variables from that scope. Also of course they can
 * access any value inside of its own scope
 */
 
 function printValue(){
     console.log(say);
 }
 /**
  * This would not work because say is defined above in the scope of another function
  * that isn't on the global scope.
  */
  
  /**
   * Whenever we create data inside of a function, that data is forever inside of
   * that function. It is only available to the scope of that function. unless
   * using var to declare a variable, but it is still nonetheless forever existing
   * in your file in your function. 
   */