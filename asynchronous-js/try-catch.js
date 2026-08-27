async function getUser(userId) {
	try {
		const user = await fetchUserData(userId);
		console.log("Got user:", user);
		return user;
	} catch (error) {
		console.error("Failed to fetch user:", error.message);
	} finally {
		console.log("Done attempting fetch");
	}
}

getUser(-1);
