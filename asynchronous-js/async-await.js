async function getUser() {
	const user = await fetchUserData(101);
	console.log("Got user:", user);
	return user;
}

getUser();
