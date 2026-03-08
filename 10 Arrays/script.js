//Arrays

// array literal

const numbers = [12, 42, 56, 22, 14, 118,114, 199];
const mixed = ["hello", 17, null, true, false]

//array constructor
const fruits = new Array("apple", "orange", "grape");

//getting value from the array

let x;
x = numbers[3];
x = numbers[5] + numbers[0];

x = `my favorite fruit is ${fruits[0]}`;
x = numbers.length;
fruits[2] = "banana";
x = fruits; 
 
console.log(x);