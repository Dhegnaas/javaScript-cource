// creating an object
const person = {
    //key: value
    firstName: "Abdirahman",         //property
    lastName: "mohamed mohamud",
    isAdmin: true,
    address: {
        city: "mogadisho",
        district: "kaaraan",
        Area: "jamhuuriyo",
    },
    hobbies: ["coding", "music", "shukaansi"],
};

// accessing object properties
let x;

x = person;
x = person.lastName;
x = person.address;
x = person.hobbies;

//updating properties
person.lastName = "dhegnas";
person["isAdmin"] = false;

//deleting properties
delete person.hobbies;

//creating new properties
person.age = 25;

// adding function
person.greet = function () {
    console.log(`hello, magaceygu waa ${this.firstName}, waxaan jiraa ${this.age} sano,`);
};

x = person;
person.greet();
console.log(x);