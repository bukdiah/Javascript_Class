//function statement
//function is the first word
function greet(name) {
    console.log('Hello ' + name);
}

greet('John');

//using a function expression
var greetFunc = function(name) {
    console.log('Hello '+ name);
};
greetFunc('John');

//Immediately Invoked Function Expression (IIFE)
//Lets you run the function at the point where you create it
var greeting = function(name) {
    //console.log('Hello '+ name);
    return 'Hello ' + name;
}('John'); //invoking a function on the fly. Invokes immediatly after creating it

console.log(greeting); //greeting holds the string, not the function

//Trick the syntax parser into knowing you do not intend this to be a function statement
//Make sure the word function isn't the first word the parser sees by using () grouping
//When you want a function statement to hang out by itself like 3;
//This function sits here and does nothing, but is valid syntax
/*
    Created a function and running it at the same time
    () makes JS interpret it as an expression
*/
var firstname = 'John';

(function(name) {
    var greeting = 'inside IIFE hello';
    //return 'Hello ' + name;
    console.log(greeting + ' ' +name);
}(firstname)); //iife