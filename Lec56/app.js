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

for (var prop in john) {
    //Method on the base object.
    //Tells you if this object really has this property
    //If it does...returns true
    if (john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);        
    }
}

var jane = {
    address: '123 Street',
    getFormalFullName: function() {
        return this.lastname + ' ,' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

/*
Composes or combines these objects. Takes all the props
and methods of these other objects you give it and
adds them directly to john
*/
_.extend(john,jane,jim);

console.log(john);