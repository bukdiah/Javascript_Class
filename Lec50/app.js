var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        /*
        Since this is a method in an object, the this keyword will point to the obejct that contains the method
        when executed (person)
        */
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}


var logName = function (lang1, lang2) {
    /*
    WIll fail because the this keyword at this level, points to the Global Object
    */
    console.log('Logged:' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------');
}

//logName();

/*
Control what 'this' points to
*/

//bind method returns a new function.
//Makes a copy of the logName function
//Sets up the new copy so that whenever it's run, JS sees that it was created with bind,
//it sees that the this variable is whatever was passed into bind
var logPersonName = logName.bind(person);

logPersonName('en'); //Logged: John Doe

/*
can invoke a function using Call() as well and pass what you want the this variable to be
*/
logName.call(person, 'en', 'es');

/*
Apply is similar to call, but accepts an array of args instead
*/
logName.apply(person, ['en', 'es']);

//Do it on the fly

(function (lang1, lang2) {
    /*
    WIll fail because the this keyword at this level, points to the Global Object
    */
    console.log('Logged:' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------');
}).apply(person, ['es', 'en']); //create a function on the fly and invoke it using apply

//Real life uses


//function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
};

//Grab methods from other objects and use them, so long as you have similar property names
//so that the function works
console.log(person.getFullName.apply(person2));

//function currying
function multiply(a,b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this,2);

console.log(multipleByTwo(4));

/*
The bind is equivalent to doing this...sets a permanent value for the first arg

function multipleByTwo(b) {
    var a = 2;
    return a*b;
}
*/