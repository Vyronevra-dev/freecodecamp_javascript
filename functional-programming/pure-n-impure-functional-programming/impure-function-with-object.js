// impure function changes the original object

function updateAge(user) {
	user.age = 30;
	user.name = "Mwanasiti";
	return user;
}

const person = {
	name: "Jona",
	age: 21
};

console.log(updateAge(person));

// or we could write it this way name is Luke and age is 15
console.log(updateAge({ name: "Luke", age: 15 }));

/** 
 * Correct Functional way (Immutable)
 * Immutability is a core functional programming principle
**/

function updateAges(user) {
	return { ...user, age: 30 };
}

const user = {
	name: "Hudson",
	age: 40
};

const updatedUser = updateAges(user);
console.log(updatedUser);
