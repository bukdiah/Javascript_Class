b();
console.log(a)

/*
Above code still runs and outputs
    called b!
    undefined

This is called hoisting.
*/
var a = 'Hello World';

function b() {
    console.log('Called b');
}

//b();
//console.log(a)

/*
    Explanation of hoisting:

    Execution Context is created in TWO phases

    Creation Phase:
    Global Object, this, outer environment (all set up in memory)

    Setup memory space for the variables and Functions "Hoisting"

    Before your code is executed line by line, JS engine set up memory space
    for the variables and functions you have created. So they exist in memory.
    When code is executed line by line, it can access them

    When it comes to variables, things are different...

    Function in its entirety is placed into memory space

    During exection phase is when assignments are set a = SOMETHING
    Instead, a placeholder of undefined is used

*/