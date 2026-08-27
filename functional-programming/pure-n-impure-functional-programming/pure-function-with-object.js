// does not modify the user object

function getFullName(user) {
	return `${user.firstName} ${user.lastName}`;
}

const user = {
	firstName: "Ford",
	lastName: "Mustang"
};

console.log(getFullName(user));
