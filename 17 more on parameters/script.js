// Defaultparameters
function sayHello(name = "Abdirahman") {
    console.log("may name is " + name);
}

sayHello("dhegnaas");
sayHello("farayare");
sayHello();

// rest params
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    console.log(total);
}

sum(5, 5, 5, 5, 5, 5, 5, 5, 5, 5);

// object as a parameter
function loginUser(user) {
    console.log(`the user id is ${user.id} and my name is ${user.name}`)
}

const user = {
    id: 1,
    name: "Abdirahman",
    email: "abdi@rahman.com",
};

loginUser(user);