
// arrrow function kooban
const labalaab = n => n * 2;

console.log(labalaab(5)); 

// Labo parameter
const isku_dar = (a, b) => a + b;

console.log(isku_dar(10, 20));

// Arrow Function aan lahayn wax parameter ah
const dhambaal = () => console.log("Kani waa farriin kooban!");
dhambaal();

// Arrow Function + Array.map()
const numbers = [1, 2, 3, 4];

const result = numbers.map(n => n * 2);

console.log(result);

// Arrow Function + filter()
const numberss = [1, 2, 3, 4, 5];

const even = numbers.filter(n => n % 2 === 0);

console.log(even);

// Arrow Function + forEach(
const names = ["Ali", "Ahmed", "Fatima"];

names.forEach(name => console.log(name));

// Object ku jira Arrow Function
const person = {
  name: "Ali",
  greet: () => {
    console.log("Hello");
  }
};

person.greet();
// Arrow Function return object
const createUser = (name, age) => ({
  name: name,
  age: age
});

console.log(createUser("Ali", 25));

// Nested Arrow Function
const multiply = a => b => a * b;

console.log(multiply(2)(3));

// Arrow Function with condition
const checkAge = age => age >= 18 ? "Adult" : "Young";

console.log(checkAge(20));

// Arrow Function oo lagu dhex isticmaalay setTimeout
console.log("Shaqadu hadda waxay bilaabanaysaa...");

setTimeout(() => {
  console.log("Hambalyo! 3 ilbiriqsi ka dib ayaa la i soo daabacay.");
}, 3000);

console.log("Anigu ma sugayo, horey ayaan u soconayaa!");
