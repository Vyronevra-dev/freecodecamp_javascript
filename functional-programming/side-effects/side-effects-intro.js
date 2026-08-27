// this function changes something outside itself
let counters = 0;

function increment() {
	return counters++;
}

console.log(increment());

// API Call for example
function fetchUser() {
	return fetch("https://api.example.com/user");
}
