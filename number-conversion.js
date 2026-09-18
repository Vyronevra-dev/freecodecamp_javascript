const input = '3.99';
const inputToNumber = +input;

// (a)
console.log(inputToNumber);
console.log(typeof inputToNumber);
console.log(Math.floor(inputToNumber));

// (b)
const check = Number('hello');
const ifNaN = Number.isNaN(check);

console.log(ifNaN);

// (c)
const ageStr = '55 years old';
const parse = ageStr.slice(0, 2);
const integer = +parse;

console.log(integer);

// (d)
const price = 1234.5678;
const formatted = price.toFixed(2);

console.log(formatted);
