// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
        // makeContact should return an object with the persons contact info
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    
    
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
    // addContact is a function that pushes the new contact into the contacts array.
         addContact: function (contact) {
            contacts.push(contact); 
        },
        //findContact needs to take a string and return the object found with the same name in string
        findContact: function(fullNameString){
            // go through contacts
           for(var i = 0; i <= contacts.length -1; i++){
               if(contacts[i].nameFirst + " " + contacts[i].nameLast === fullNameString){
                   return contacts[i];
               } else{
                   return undefined;
               }
           }
            },
         //removeContact removes a contact object from contacts   
        removeContact: function(contact){
            for(var i = 0; i <= contacts.length; i++){
               // test if given contact matches the object we are at
                if(contact === contacts[i]){
                 // if true remove that contact.
                    contacts.splice(contacts[i],1);
                }
            }
        },
        printAllContactNames: function(){
         // we need to return the firstName and lastName combined in a string seperated by new lines
          var fullNameArray = [];
           for(var i = 0; i <= contacts.length; i++){
              // push firstName and lastName into fullnameArray.
                   fullNameArray.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`)
               
           }
            return fullNameArray.join('\n');
        }
            
        };
       
       
       
        
    }





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
