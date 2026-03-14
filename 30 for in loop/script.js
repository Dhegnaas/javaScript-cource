// for in loop 
//iteration over the properties of an object

const colorObject = {
    color1: "red",
    color2: "blue",
    color3: "orange",
    color4: "green",
    color5: "black",
};

for (const key in colorObject) {
  console.log(key, colorObject[key])
}

const student = {
    id:1,
    name: "Abdirahman mohamed",
    email: "abdirahman@gmail.com",
    tell: "+252617624133",
};

for (const key in student) {
    console.log(` ${key}: ${student[key]}`);
}