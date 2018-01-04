Array.prototype.myCustomFeature = 'Cool!';

//An array is an object and each item becomes a new property
/*
0: John
1: Jane
2: Jim

0,1,2 is the property name
*/
var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log(prop + ': '+ arr[prop]);
}
