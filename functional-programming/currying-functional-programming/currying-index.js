function add(a, b) {
	return a + b;
}

console.log(add(5, 2));

function add(a) {
	return function (b) {
		return a + b;
	}
}

const add = a => b => a + b;

function multiply (a, b, c) {
	return a * b * c;
}

function multiply(a) {
	return function (b) {
		return function (c) {
			return a * b * c;
		}
	}
}

const multiply = a => b => c => a * b * c;

