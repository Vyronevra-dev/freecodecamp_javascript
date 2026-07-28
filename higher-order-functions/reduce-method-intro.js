// Using for loops for adding values in an array

const numbers = [1,2,3,4,5];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
	total += numbers[i];
}

console.log(total);


// reduce() method combines many elements into one
// accumulator is your storage
// currentValue is the item being processed
// return is the updated storage

const numberss = [1,2,3,4,5];

let totals = numberss.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totals);
