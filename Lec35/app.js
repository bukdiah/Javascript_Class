greet();


//This is a function statement. This does not return a value when evaluated
//This does get hoisted though, so it's available ahead of time
function greet() {
    console.log('HI');
}

//Function expression
/*
Created an object on the fly and setting it equal to annonymousGreet
Returns an object function
*/
var annonymousGreet = function() {
    console.log('HI');
}

annonymousGreet();

function log(a) {
    //console.log(a);
    a(); //invoke function that was passed in
}

//Passing a function to a function is possible in JS cause they are first order functions
log(function() {
    console.log('Hi');
});