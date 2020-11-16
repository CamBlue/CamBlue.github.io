/**
 * LOOPS
 * Loops in JAvascript are used to iterate over our data, or in other words
 * 'Repeat' ourselves. They are built in constructs in Javascript that 
 * allow us to execute blocks of code as many times as we need over each 
 * value in our collection. They are mostly used for collections. 
 * 
 * There are 3 different kinds of loops:
 * For Loop
 * For/In Loop
 * While Loop
 * 
 * Each of these have their own advantages to which collection or use we would
 * need them for.
 * 
 * For loops are usually used for accessing Arrays.
 * 
 * 
 * For/In loops are especially good for iterating through Objects. This is because
 * this type of loop access each key/value pair in an object one by one.
 * 
 * While loops are used when you want to execute a block of code as long as the
 * given test condition is True. These loops are dangerous if you do not 
 * use the correct syntax or if you set up a never ending loop. Using a while 
 * loop that doesn't end will usually crash your browser or work environmen
 * you are currently in. 
 * 
 * 
 */
 
 var myArray1 = ['Cameron', true, 8, false, '7'];
 var myObject2 = {weather: 'Sunny', temperature: 68};
 
 // Loop Counting Up
 
 for(var i = 0; i <= 10; i++){
     console.log(i);
 }
 // This will print the numbers 1 2 3 4 5 6 7 8 9 10.
 
 
 // Loop Counting Downwards
//Using a For Loop to count downwards
 for(var n = 20; n >= 0; n--){
     console.log(n);
 }
 // This will print 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0.
 
 
// Loop over an array from forwards!
// This is when a For loop to loop through an Array!
for(var a = 0; a <= myArray1.length - 1; a++){
    console.log(myArray1[a]);
}

// This will print every value in the myArray1 Array from the first to last index.


// Loop over an array backwards
// Using a For Loop to go through an Array again!
for(var j = 0; j >= myArray1[0]; i--){
    console.log(myArray1[j]);
}

// This will print every value from end to beginning in myArray1.


//Loop over an Object
// Here is when we would use a For/In Loop, to go through our object.
for(var key in myObject2){
    console.log(key);
}
 // this will print all the keys of myObject2 one by one
 // Again we are using a for/ in loop because they are best for iterating through objects.
for(var key2 in myObject2){
    console.log(myObject2[key2]);
}
// This will print the value of each key in myObject2. 


//While loops can also be good for counting or using a if/else if chain.

var realTruth = 10;

while(realTruth <= 20){
    console.log(realTruth);
    realTruth++;
}

// this would print the numbers 10 11 12 13 14 15 16 17 18 19 20 to the console.