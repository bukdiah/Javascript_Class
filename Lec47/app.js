function buildFunctions() {
    var arr = [];

    for(var i = 0; i< 3; i++) {
        arr.push(
            function(){
                console.log(i); //this is not being executed here
            }
        );
    }

    return arr; //when you hit this return arr; what's in memory is that i = 3 and arr holds 3 functions [f0,f1,f2]
}

var fs = buildFunctions();

//Functions are invoked here

fs[0](); //yields 3
fs[1](); //yields 3
fs[2](); //yields 3

//What if you wanted the code to output 0,1,2 ?

/*Two Methods

    keyword let

    let variables are scoped to the block. So everytime the for loop runs, this will be a
    new variable in memory

    or using IIFEs


*/
function buildFunctions2() {
    var arr = [];

    /*
    let j = i; //New ES6 lets us do that
    for(var i = 0; i< 3; i++) {
        arr.push(
            function(){
                //console.log(i); //this is not being executed here
                console.log(j);
            }
        );
    }*/
    //Everytime the loop runs, it's gonna execute the function passing 0,1,2 and creating
    //new execution context every time
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j){
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr; //when you hit this return arr; what's in memory is that i = 3 and arr holds 3 functions [f0,f1,f2]
}

var fs2 = buildFunctions2();

//Functions are invoked here

fs2[0](); //yields 3
fs2[1](); //yields 3
fs2[2](); //yields 3

