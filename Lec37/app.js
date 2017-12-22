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
         Now you have a new variable, that is set equal to by reference as the this keyword
         Right now, this keyword points to the whole object (c)
         Now use self, everywhere you would use this
        */
        var self = this;
        /*
        You can mutate the object that contains me, if I'm a method of that object by using the this keyword
        */
        //this.name = 'Updated c object';
        //console.log(this); //points to the OBJECT that contains keyword this
        self.name = 'updated c object';
        console.log(self);

        var setname = function(newname) {
            //this.name = newname; // this keyword points to the GLOBAL object, to avoid, try using the self pattern
            self.name = newname;
        }

        setname('Update again!');
        //console.log(this);
        console.log(self);
    }
}

c.log(); //invoke the function inside the object literal which is attached to log

/*
In a case where a function is actually a method attached to an object, this keyword
becomes the object that that method is sitting inside of-c
*/