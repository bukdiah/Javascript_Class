/*
    When you create a function, keyword this points to the global object
    if you SIMPLY invoked the function
*/
function a() {
    console.log(this);
    this.newvariable = 'Hello'; //attached to the global object
}

/*
Run the code property of the function object
Create an execution context (a keyword this is created here)
*/
a();
console.log(newvariable);
/*
Similarly points to the global object
*/
var b = function() {
    console.log(this);
}
b();

//keyword this points to the same address; the global object

var c = {
    name: 'The c object',
    log: function() {
        /*
        You can mutate the object that contains me, if I'm a method of that object by using the this keyword
        */
        this.name = 'Updated c object';
        console.log(this); //points to the OBJECT that contains keyword this
    }
}

c.log(); //invoke the function inside the object literal which is attached to log

/*
In a case where a function is actually a method attached to an object, this keyword
becomes the object that that method is sitting inside of-c
*/