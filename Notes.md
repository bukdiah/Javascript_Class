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