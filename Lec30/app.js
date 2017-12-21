//Better ways to make an object

var person = new Object();

//computed member acess operator []

//One way to set access property
person["firstname"] = "Tony";
person["lastname"] = "Pony";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty])

//dot operator
//primitive property
console.log(person.firstname);

//object as a property
person.address = new Object();
person.address.street = "123 Some Street";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);