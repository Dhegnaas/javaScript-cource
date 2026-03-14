// forEach lopp

const socials = ["X", "LinkedIn", "facebook", "instegram", "tiktok"];

socials.forEach(function (item) {
    console.log(item);
});

const numbers = [10, 20, 30, 40, 50,60, 70];

//short form
numbers.forEach((item) => console.log(item));

const socialMediaObject = [
    {name: 'X', URL:'https://x.com'},
    {name: 'facebook', URL:'https://facebook.com'},
    {name: 'instegram', URL:'https://instegram.com'},
    {name: 'whatsApp', URL:'https://whatsapp.com'},
    {name: 'tiktok', URL:'https://tiktok.com'}
];

socialMediaObject.forEach((item) => {
    console.log(`${item.name} => ${item.URL}`)
});