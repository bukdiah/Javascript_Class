var arr = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main Street'
    },
    function(name) {
        var greeting = 'Hello';
        console.log(greeting + name);
    },
    "Hello"
];

console.log(arr);

//Passing the field of the 2nd in the array, to a function expression in the 3rd index

//arr[3](); //How to invoke the function 
arr[3](arr[2].name);