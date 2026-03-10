// creating or defining a function

function sayHello() {
    console.log("hello mashaqo");
}

//invoked, excuting or calling a function 
sayHello();


//creating function
function salaan() {
    console.log("waa ku salaamay somali madax madow");
}
//calling function
salaan ();

// creating function with parameters
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
// invoking a function with parameters
addNumbers(10,100)

//fuction returning a value
function subtractNumbers(num1, num2) {
    return num1- num2;
} 

console.log(subtractNumbers(30, 5));

//assign the returned value to a variable 
const result = subtractNumbers(10, 6);

console.log(result)
