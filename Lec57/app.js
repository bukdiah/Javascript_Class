/*
Constructing an object via a function..called a function constructor
*/
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('THis function is invoked');
}

/*
What happens?
the new operator creates an empty object and calls the Person() function
Now the 'this' variable is pointing to that empty object in memory
that the new operator created
.firstname and .lastname are added to that empty object and returned
*/
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);