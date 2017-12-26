var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: ' Doe'
};

//Never do this; for demo purposes only
john.__proto__ = person; //John's prototype points to person. now inherits from person
console.log(john.getFullName()); //John Doe
console.log(john.firstname); //John

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());