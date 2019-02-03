/*
We want to create a new execution context for our entire framework/library
So all of our variables we create are safe and we're only exposing on
the global object what we want
*/

//we need access to the global variable: window and the jquery variable
/*
Whenever we use Greetr, we want it to be used like this
var g = G$(firstname, lastname, language)
*/
(function(global, $){
    var Greetr = function (firstname, lastname, language) {
        //Want it to reutrn the results of a different function constructor
        //This allows us to not have to use the new keyword all the time
        return new Greetr.init(firstname, lastname, language); //.prototype prop of this function, is where the new object will point to as its proto
    }

    /*
    Place methods you wanna use inside your object that is returned from Greetr
    */
    Greetr.prototype = {};

    Greetr.init = function (firstname, lastname, language) {
        //Setting up some default values
        //Pass values to the empty object created by keyword new
        //Using keyword this
        var self = this;
        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "en";
        
        /*
        Object created here needs to point to Greetr.prototype (proto) as it's prototype
        */
    }
    //where objs that are being created, they are pointed to (Greetr.init.prototype)
    // Make objects created by the function constructor...point their prototypes to Greetr.prototype
    Greetr.init.prototype = Greetr.prototype;

    /*
    Expose Greetr to outside world
    So we attach it to the global object
    We also give it the alias G$
    */
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));
