const post = {
    id: 1,
    title: "post one",
    body: "this is the post body....",
};
console.log(post); // object

// Converting object into JSON
const myJsonObject = JSON.stringify(post);
console.log(myJsonObject); // JSON string

// Parsing JSON back into an object
const myObject = JSON.parse(myJsonObject);
console.log(myObject); // JavaScript object

const posts = [
    { id: 1, title: "post one", body: "this is the post body...."},
    { id: 2, title: "post two", body: "this is the post body...."},
    { id: 3, title: "post three", body: "this is the post body...."},
];

console.log(posts); // object2

// Converting object into JSON
const myJsonObject2 = JSON.stringify(posts);
console.log(myJsonObject2);
