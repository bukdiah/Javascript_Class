/*
Constructing an object via a function..called a function constructor
*/
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('THis function is invoked');
}

/*
This prototype property of all functions is where the
prototype chain points for any objects using that
fgunction as a constructor
*/
//Better to put your methods on the prototype because they only need one copy to be used
//Placing getFullName inside function Person() would create copies of that function for
//all objects that get created
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
/*
What happens?
the new operator creates an empty object and calls the Person() function
Now the 'this' variable is pointing to that empty object in memory
that the new operator created
.firstname and .lastname are added to that empty object and returned
*/

/*
John and and Jane points to person.prototype as its prototype, so they both get access to
the method we added getFullName

*/
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

/*
Searches down the prototype chain, searches John-doesn't find getFormalFullName, so it searches
it's protoyype which points to Person.prototype. Since you already added getFormalFullName, it calls the function
*/
console.log(john.getFormalFullName());

//Any obj that you created with Person(), sometime later you can add features to all of those
//objects at once by using the .prototype property of the function constructor
