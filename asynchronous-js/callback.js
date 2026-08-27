function fetchUserData(userId, callback) {
	console.log(`Fetching data for user ${userId}...`);

	// Simulate a network request with setTimeout
	setTimeout(() => {
		const user = { id: userId, name: "Amine Onierto", role: "Student" };
		callback(null, user); // (error, result) convention
	}, 1000);
}

fetchUserData(101, (error, user) => {
	if (error) {
		console.log(`Something went wrong: ${error}`);
		return;
	}
	console.log("Got user:", user);
});
