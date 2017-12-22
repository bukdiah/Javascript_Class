function greet(firstname, lastname, language) {

    language = language || 'en';

    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('-----------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); //JS provides us with this keyword. it is array-like (not exactly a JS array)
    console.log('arg: 0 ' + arguments[0]);
    console.log('-----------');
}

//You can call greet() with no params. JS doesn't care. Hoisting does this.
greet(); //yields undefined for all console.log()

greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');