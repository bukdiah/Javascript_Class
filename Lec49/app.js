function sayHiLater() {
    var greeting = 'HI!';

    /*
    Utilizes first class functions, creating a function on fly using function expression
    */
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
    var a = 1000; //some work
    var b = 1000; //some work

    callback(); //the callback, it runs the function I give it
}

tellMeWhenDone(function(){
    console.log('I am done');
});

/*
You invoked this function and it calls back the function you gave it
*/
tellMeWhenDone(function(){
    alert('I am done');
});