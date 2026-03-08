// Array nesting , concatenation and spread

const fruits = ["apple","banan", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];
//nesting - array within array
// fruits.push(berries);

//Accessing elements inside the nested array
let x;
// x = fruits[3][1] // the second element of the nested 'berries'

//nesting two arrays in a single array
const allFruits = [fruits, berries];
x = allFruits;

// concatenating arrays with concat
x = fruits.concat(berries);

// spread operator - concatenating arrays [...]

x = [...fruits, ...berries];
const copiedFruits = [...fruits];
x = copiedFruits;

x = [...fruits, "babaay"];

const arr1 = [1, 4, 6];
const arr2 = [2, 4, 8];
const arr3 = [3, 6, 9];
x = [arr1, arr2, arr3];
x = x.flat();
 
console.log(x);