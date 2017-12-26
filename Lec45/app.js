//if you want to affect the global object, pass it in to the function

(function(global,name) {
    var greeting = 'hello';
    global.greeting = 'hello'l
    //return 'Hello ' + name;
    console.log(greeting + ' ' +name);
}('John')); //iife

console.log(greeting); //Should overwrite Hola with Hello