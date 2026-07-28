// Before using map() (using for loops)

const numbers = [1,2,3,4,5,6];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
	doubled.push(numbers[i] * 2);
}

console.log(doubled);


// After using map() which takes each item of an array, change each item and returns a new array
// USING REGULAR FUNCTIONS

const numberss = [1,2,3,4,5,6];
const doubledd = numberss.map(function (num) { return num * 2; });

console.log(doubledd);

// USING ARROW FUNCTIONS

const numbersss = [1,2,3,4,5,6];
const doubleddd = numbersss.map((num) => num * 2);

console.log(doubleddd);
