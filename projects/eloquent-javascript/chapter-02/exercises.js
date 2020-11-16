
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  // Create a loop that console logs another hashtag for every iteration until a stopping point.

for(let i = '#'; i.length <= number; i += '#'){

  console.log(i);
}
  
  
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
 // Create a coutning loop
  for(let number = 1; number <= 15; number++){
      // Declare a string container that we can add our strings to print to the console
        let string = '';
       // If the number is divisible by 5 and 3
        if(number % 5 === 0 && number % 3 === 0){
          console.log(string += 'fizzbuzz');
       // If the number is divisible by 5
        } else if (number % 5 === 0){
        console.log(string += 'buzz');
       // if the number is divisible by 3
        } else if (number % 3 === 0){
          console.log('fizz');
       // If the number isnt divsiable by either 5 or 3 then print the number to the console.
        } else {
          console.log(number);
        }
     
    
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {
 // We need to declare a size variable and a container for our chessboard.
  let size = 8;
  let board = '';
  // We need to create two loops to handle the different lines.
  for(var i = 0; i < size; i++ ){
    for(var n = 0; n < size; i++){
    // We need to test where the iteration is at each iteration. 
      if((n + i) % 2 === 0){
        board += ' ';
      } else {
        board += '#';
      }
    }
  }
  // We also have to add a new line after each time the line finishes.
  board += '\n';
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
