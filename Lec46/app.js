/*
    The greet function returns a function
*/
function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}
/*
 greet('Hi) returns a function so to invoke it again use another ()

*/
greet('Hi')('Tony'); //yields Hi Tony

var sayHi = greet('Hi');
sayHi('Tony'); //Same result possible via Closures