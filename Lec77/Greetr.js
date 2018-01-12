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
    // 'new an object
    var Greetr = function (firstname, lastname, language) {
        //Want it to reutrn the results of a different function constructor
        //This allows us to not have to use the new keyword all the time
        return new Greetr.init(firstname, lastname, language); //.prototype prop of this function, is where the new object will point to as its proto
    }

    /*
    Create variables you want access to but are hidden from devs
    Can use inside your object because of Closures!
    */
    var supportedLangs = ['en', 'es'];

    //Informal Greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //Formal Greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //Logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    /*
    Place methods you wanna use inside your object that is returned from Greetr
    */
    Greetr.prototype = {
        
        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '!';
        },

        greet: function(formal) {
            var msg;

            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            //'this' refers to the calling object at execution time
            //makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': '+ this.fullName())
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },
        /*
        jQuery method that accepts a selector and wheher or not it's a formal greeting
        and sets up the greeting itself
        */
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if(!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            
            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    Greetr.init = function (firstname, lastname, language) {
        //Setting up some default values
        //Pass values to the empty object created by keyword new
        //Using keyword this
        var self = this;
        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "en";
        
        /*
        Object created here needs to point to Greetr.prototype as it's prototype
        */
    }
    //where objs that are being created, are pointed at (Greetr.init.prototype)
    Greetr.init.prototype = Greetr.prototype;

    /*
    Expose Greetr to outside world
    So we attach it to the global object
    We also give it the alias G$
    */
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));