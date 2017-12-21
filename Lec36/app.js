//by value (primitives)
var a = 3;
var b;

b = a; //makes a copy of a in it's own space in memory

a = 2;

console.log(a);
console.log(b);

//by reference (all objects)
var c = { greeting: 'hi' };
var d;

d = c; //d points to the same memory address that c points to
c.greeting = 'hello'; //mutated! To change something

console.log(c);
console.log(d);

//by refernece even as parameters
function changeGreeting(obj) {
    obj.greeting = 'Hola'; //Mutate
}

changeGreeting(d); //c and d greeting should equal Hola now
console.log(c);
console.log(d);

//Equals operator sets up new memory space (new address)
c = { greeting: 'howdy' }; //Saw the second object wasn't in memory, so JS added it
console.log(c); //Howdy
console.log(d); //Hola