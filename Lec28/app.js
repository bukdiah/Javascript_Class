//How to set default values
function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet('Tony');
greet();

/*
    The || operator returns the first value that can be coerced to TRUE
    undefined || 'hello' returns hello; hello can be coereced to true Boolean("hello")
    null || 'hello' returns hello
    "" || "hello" returns hello
    0 || 1 returns 1
    "hi" || "hello" returns "hi"
*/