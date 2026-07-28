const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce(function (acc, fruit) {
	if (acc[fruit]) {
	acc[fruit] += 1;
	}
	else {
	acc[fruit] = 1;
	}
	return acc;
}, {});

console.log(count);
