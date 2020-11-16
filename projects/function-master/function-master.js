//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

 // Create a container to hold our new values
   var newContainer = [];
 
  // WE need to loop through our object
    for(var key in object){
  
    // WE need to add all of our key values to our new container
        newContainer.push(object[key]);
  
   // After adding all the key/values return our new container
    } return newContainer;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

// We need to return our objects keys in one string

// we Can do this by accessing all the objects keys andassigning them to a value while at the same time join them in a string.
 
 var objKeysString = Object.keys(object).join(' ');


 return objKeysString;


}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
// Create containers to hold our results in 
  var tempArr = [];
  
    var resultArr = [];
  // We need an array that contains all of our object values to loop through
    tempArr = Object.values(object);
  // Loop through our values array
    for (let i = 0; i < tempArr.length; i++) {
     // WE need to test if each value is a string or not
        
        if (typeof tempArr[i] === 'string') {
        // If it is a string push it into our temporary array
            resultArr.push(tempArr[i]);
        }
    }// WE need to join all of our values into one string .
    return resultArr.join(' ');

    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   // We need to simply test if our collection is an array or object
    if(Array.isArray(collection)){
     
        return 'array';
   // Test if the collection is an object
    } else if (typeof collection === 'object'){
   
        return 'object';
  
    } else {
  // return nothing if there is no collection that is an Array or Object.
        return null;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
// We need to capitalife the first letter of the string and then return it
// WE can do this by accessing the first character
// Then we uppercase that index, and add the rest of the string to that index.
return string.charAt(0).toUpperCase() + string.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 
  // We need to make each string accessible one by one.
 // Here we assign a new variable container to an array of the split string
  var containerOne = string.split(' ');
// We need to loop through the array to access each index individually
  for(var i = 0; i < containerOne.length; i++){
  // Only for the first index we iterate through we uppercase it and then return the rest of the array with subtr
    containerOne[i] = containerOne[i][0].toUpperCase() + containerOne[i].substr(1);
  }
 // We need to make our array back into one big string! We can do this with .join().
  return containerOne.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // We need to fidn the name property on object and assigne it to a variable to be returned.
    object.name = object.name[0].toUpperCase() + object.name.substr(1);
    // return the message
    return `Welcome ${object.name}!`;
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
 // We know the given object will have a name and species property
 // WE have to capitalize the first letter of the name and species
 // Then combine both of the values at the given keys into a string 
 // Also have to specify the character you want to capitalize inside the object key value.
    object.name = object.name[0].toUpperCase() + object.name.substr(1);
  
    object.species = object.species[0].toUpperCase() + object.species.substr(1);

    return `${object.name} is a ${object.species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   // We need a container to hold the noises we will have.
var noisesArr = [];
  // WE need to test if the object has a noises property at all 
    if (object.hasOwnProperty('noises')) {
      // We then need to check if it has any value inside of the noises array
        if (object.noises.length > 0) {
        // If it does exist and has a length greater than 0 add it to our new noises Array
            noisesArr = object.noises;
        }
        else {
          
            return 'there are no noises';
        }
    }
    else {
     
        return 'there are no noises';
    }
  // We need to re join our array into a string of all our the given animals noises.
    return noisesArr.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//We need to be able to loop through our string by turning it into an array
// We also need to create a container for our new array of strings.
let arrayStrings = string.split(' ');

    //We need to test each index and see if it is equal to our word.
    if(arrayStrings.includes(word)){
        return true
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   if(!object.hasOwnProperty('friends')){
       return false;
   } else{
       return object.friends.includes(name);
   }
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// create an array to hold the names of the non-friends
    var notAFriend = [];
    // iterate through the array of objects
    for (let obj in array) {
   // 
        if (array[obj].name !== name) {
      
            if (array[obj].friends.includes(name)) {
                undefined;
            }
          
            else {
          
                notAFriend.push(array[obj].name)
            }
        }
    }
    return notAFriend;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object;



}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
   // we need to loop through our array to test against our object keys
    for(var i = 0; i < array.length; i++){
      // test if the array names are inside our object properties
        if(object.hasOwnProperty(array[i])){
           // If it does contain it then delete that name.
            delete object[array[i]];
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

var result = [...new Set(array)];
    return result;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}