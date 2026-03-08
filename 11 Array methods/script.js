// Array Methods

const arr = [31, 41, 5, 154, 53, 66, 78];

// push() - adds a value to the end of the array
arr.push(100);
// pop() -removes the last item of the array
arr.pop();
arr.pop();
arr.pop();

//unshift()b- adds a value to the beginning of the array
arr.unshift(100);

// shift() - removes the first element of the arrays
arr.shift();

//reverse() - reverse an array
arr.reverse();

//includes() - check to see if something is in the array
let x;
x = arr.includes(31);

//indexof()  - returns the index of the first match
console.log(arr);
x = arr.indexOf(31);
x = arr.toString();

//slice(start, end) - returns elements in an array as new arrays
x = arr.slice(1, 4);

console.log(x);