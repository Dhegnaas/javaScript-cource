   // 1. Array destructuring
const fruits = ["Apple", "Banana", "Orange"];

// destructuring
const [koowaad, labaad, sadaxaad] = fruits;

console.log(koowaad);
console.log(labaad);
console.log(sadaxaad);


// 2. object destructuring

const person = {
    firstName: "abdirahman",
    lastName: "dhegnaas",
    age: 25,
};

//Accessing objects
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
const { firstName, lastName, age } = person

console.log(firstName);
console.log(lastName);
console.log(age);
