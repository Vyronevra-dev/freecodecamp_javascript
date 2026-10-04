function processInput(input) {
	if (typeof input !== 'string') {
		throw new TypeError('Input needs to be a string');
	}

	return input.toUpperCase();
}

try {
	console.log('Processing Input...');
	const result = processInput(9);
	console.log('Processed Input:', input);
}
catch(error) {
	setTimeout(() => {
		console.log('Making final touches...');
	}, 3000);

	setTimeout(() => {
		console.error('Error occured:', error.message);
	}, 3000);
}
