// map

const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// same with forEach

const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);

//
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// ceate an array of company names

const companyNames = companies.map(compony=>compony.name)
console.log(companyNames)
// create an array of company and its category

const componyInfo = companies.map(compony => {
    return {
        name:compony.name,
        category: compony.category,
        start: compony.start
    }
});

console.log(componyInfo)