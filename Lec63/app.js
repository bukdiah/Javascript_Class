//Polyfill example
/*
Check if Object.create exists.
If not, adds Object.create to the global object 
*/
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }
        /*
        Creates an empty function, sets it's prototype (the variable of prototype that is used for function constructors),
        and sets it equal to the function you pass in
        */
        function F() {}
        F.prototype = o;
        return new F(); //new creats an empty object, runs F(), and points the prototype of that new empty object to whaetver you passed in
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

//Build an object and set it's prototype
//Built in for newer JS engines
/*
Creates an empty object with its prototype pointing to whatever
you passed in during Object.create()
*/
var john = Object.create(person);

/*
Override properties you want
*/
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

person.shart = function(){
    return 'SHART SHART ' + this.firstname;
}

console.log(john.shart());