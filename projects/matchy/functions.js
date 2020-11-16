/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    // Go through animals array and return animal object with name of name
   for(var i = 0; i < animals.length -1; i++){
// test if the animal name is equal to the name string
          if (animals[i].name === name){
   // if pass return animal object
             return animals[i];
 
    } 
 
    // If nothing found return null
        } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
     for(var i = 0; i < animals.length -1; i++){
       // test for any equalness in the name strings
         if(animals[i].name === name){
       // Set our found animal object to a new replacement object.
             animals[i] = replacement;
      
         }
     }
     
    
    
    
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
  
    for(var i = 0; i < animals.length -1; i++){
    // Test if any of the names of the animals in animals array are equal to the name
        if(animals[i].name === name){
    // If test passes then remove that index of the Array.
            animals.splice(animals[i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    function add(animals, animal){
   // loop through our animals array
      for(var i = 0; i < animals.length - 1; i++){
      // testing for any coincidences of animal names
        if(animals[i].name === animal.name){
         // if test passes return that animal
            return animal;
        }
      
      // testing to make sure that the animal object has values inside of its properties.
        } if(animal.name.length > 0 && animal.species.length > 0){
        // push the animal object into our animals array.
            animals.push(animal); 
    } 
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
