Syntax Parser: A program that reads your code and determines what it does
and if its grammar its valid. Your code is being translated to machine language by the compiler

Lexical Environment: Where something sits physically in the code you write
    Lexical means having to do with words or grammar. A lexical Environment exists in which
    WHERE you write someting is important (where its written and what surrounds it)

Execution Context: A wrapper to help manage the code that is running.
    There are lots of lexical environments. Which one is currently running is managed via
    execution contexts. It can contain things beyond what you've written in your code.

Name/Value Pair: A name which maps to a unique value. The name may be defined more than once,
but only can have one value in any given CONTEX. THat value may be more name/value pairs.

Object: A collection of name value pairs. The simplest definition when talking about JS
    Address:
    {
        Street: 'Main',
        Number: 100,
        Apartment:
        {
            Floor: 3,
            Number: 301
        }
    }

Global: Not inside a function

![](2017-12-16-18-17-18.png)

![](2017-12-16-18-32-09.png)

Javascript Undefined: A value that means the variable hasn't been set/initially set by JS

Single threaded: One command is executed at a time. Under the hood of the browser...maybe not.

Synchronous: One at a time and IN ORDER

Invocation: Running a function. Every time a function is called, a new execution context
is created for that function

If you run the code below...

![](2017-12-16-18-51-08.png)

THe conctexts in the execution stack are then popped off

Variable Environment: Where the variables live and how they relate to each other in memory. Every execution context has its own variable environment

![](2017-12-17-17-51-37.png)

function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();

![](2017-12-17-18-30-13.png)

Scope: Where a variable is available in your code and if it's truly the same variable, or a new copy

Keyword "let" allows you to perform block scoping

Asynchronous: More than one at a time

Event Queue won't be processed until the execution stack is empty

![](2017-12-17-19-04-09.png)

Javascript has Dynamic Typing: YOu don't tell the engine what type of data
a variable holds. It figures it out while your code is running. Values can hold different types of values because it's all figured out during execution.

var isNew = true; //not errors
isNew = "yup";
isNew = 1;

Primitive Types:

Number (Floats)
Booleans (True or False)
String ('' or "" can be used)
undefined : represents a lack of existence
null: represents lack of existence(you can set a variable equal to nothing using null)

Operator: A special function that is syntactically (written) differently. Generally, operators take two paramters and one result

EX:

var a = 3 + 4;
console.log(a)

//+ sign is an operator and is actually a funciton
/*
function +(a,b) {
    return // add the two numbers
}

infix notation allows us to call the function like this
    3 + 4

Operator Precedence: Which operator function gets called first. Functions are called in order of precedence (Higher precedence wins)

Operator Associativity: What order operator functions get called in: Left-to-right or right-to-left. When functions have the SAME precedence.

Coercion: Converting a value from one type to another. This happens often because JS is dynamically typed

var a = 1 + '2';
console.log(a)   //12

number 1 is coerced into a string '1' so this happens var a = '1' + '2'

Comparison operators

console.log(3<2<1); //evalutes to true

< operator is left to right associative

3<2 evalues to false

false < 1  /// false is coerced into 0. Can see this doing Number(false)

0<1   is true

Not all coercisions are gonna be correct though
Number(undefined) yiled NaN, Number(undefined) yields 0

Avoid that coercion stuff by using STRICT equality

3 === 3 true
"3" === "3" true
"3" === 3 false      different type, so not equal

Objects and the dot

Objects and their properties and methods are created in memory using any of the various syntax

var person = new Object(); //Do not do it this way

Object literal ---> var person = {};  shorthand for above

Can set up properties and methods using object literals

var person = {
    firstname: "tony",
    lastname: "Pony"
}


Namespace: A container for variables and functions. Typically to keep variables and functions with the same name separate

JS doesn't have namespaces

You can mimic it though
var greet = "Hello!";
var greet = "Hola!";

console.log(greet); yiels Hola!

var english = {
    greetings: {
        basic: "Hello!"
    }
};

var spanish = {}

spanish.greet = 'Hola!';

console.log(english)

Functions are Objects

First Class Function: Everything you can do with other types, you can do with functions. Assign them to variables, pass them around, create them on the fly.

![](Function_Diagram.png)

Code that you write for a function is stored in a special property called Code of the Function object. The Code property is Invocable ()

![](Function_Diagram2.png)

Function Statements and Function Expressions

Expression: A unit of code that results in a value. It doesn't have to save to a variable

Statements just does work

Function Expression (An annonymous function)

![](Function_Expression.png)

Conceptual Aside: By value vs By Reference

![](By_Value.png)

These two values become the same by copying the value into 2 separate spots in memory

![](By_Reference.png)

All objects (functions are objects too) are by reference

Mutate: To Change something. "Immutable" means cannot be changed

Objects, Functions, and this

