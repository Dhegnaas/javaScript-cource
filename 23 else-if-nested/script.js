// if...else if ...else
 
// checking multiple conditions sequence 
/*
if (condition1) {
    // code to run if condition1 is true
}else if (condition2){
    //code to run if statement2 is true
}else if (condition3) {
    // code to run if condition3 is true
}else {
    // code to run if al the condition are false
    }
*/


const number1 = 5;
const number2 = 5;
const number3 = 10;

if (number1 > number2 && number1 > number3){
console.log(`${number1} is greatest number`);
}else if (number2 > number1 && number2 > number3){
    console.log(`${number2} is greatest number`);
}else if (number3 > number2 && number3 > number1){
    console.log(`${number3} is greatest number`);
}else {
    console.log("the numbers are equal")
}


//example 2
const user ={
    name: "abdirahman",
    isAdmin: true,
    isLoggedIn: true,
};

if (user.isLoggedIn && user.isAdmin){
    console.log("welcome, admin");
}else if (!user.isAdmin && user.isLoggedIn){
    console.log("welcome, user");
}else {
    console.log("you are not logged in")
}

if (user.isLoggedIn) {
    if (user.isAdmin) {
        console.log("welcome super admin");
    }else {
        console.log("welcome user")
    }
}

