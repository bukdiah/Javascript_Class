/*
Factory is a function that returns or makes other things for you
*/
//Outer function
function makeGreeting(language) {
    /*
    Instead of passing language to the function below, we pass it to outer function
    Then returning the inner function. Language is trapped in closure.
    */
    return function(firstname,lastname){
        /*
        Will look up scope chain and even though makeGreeting will be done executing, and it's
        execution context is gone, it will still have access to language variable
        */
        if (language === 'en') {
            console.log('Hello '+ firstname + ' ' + lastname);
        }
    
        
        if (language === 'es') {
            console.log('Hola '+ firstname + ' ' + lastname);
        }
    }
}

/*
A function object whose closure points to langague being English
*/
var greetEnglish = makeGreeting('en');

/*
A function object whose closure points to langague being Spanish
*/
var greetSpanish = makeGreeting('es');

greetEnglish('John')('Doe');
greetSpanish('John')('Doe');