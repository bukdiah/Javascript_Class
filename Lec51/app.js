var arr1 = [1,2,3];
console.log(arr1);

/*
Create an array whose elements are 2 times arr1's
*/
/*
var arr2 = [];
for (var i = 0; i<arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}*/

console.log(arr2);

//Try to simplify thingsusing functional programming
/*
Gave this function an array and told it what to do in each item in the array
*/
function mapForEach(arr,fn) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;
}

var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
    return item > 2;
});

console.log(arr3);

/*
Accepts some limiter to check against to see if array items are higher
than it. It returns a boolean
*/
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

/*
Make a copy of checkPastLimit function using bind, and then set the first
parameter = 1. 
*/
var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));
console.log(arr4);

//Simplify checkPastLimit function so you don't have to call bind all the time
/*
returns a function object that has bind called on it
*/
var checkPastLimitSimplified = function (limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);