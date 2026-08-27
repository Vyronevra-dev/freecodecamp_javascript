function fetchUserData(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (userId <= 0) {
				reject(new Error("Invalid user ID"));
				return;
			}
			resolve({ id: userId, name: "Amina Anime", role: "Student" });
		}, 1000);
	});
}

fetchUserData(101)
	.then((user) => {
		console.log("Got user:", user);
		return user.id // value passed to the next .then()
	})
	.then((id) => {
		console.log("User ID was:", id);
	})
	.catch((error) => {
		console.error("Failed:", error.message);
	})
	.finally(() => {
		console.log("Request finished (success or failure)");
	})
