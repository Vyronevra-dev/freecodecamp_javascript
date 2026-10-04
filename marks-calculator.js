function marksCalculator(name, reg, marks1, marks2, marks3, marks4) {
	const totalPoints = marks1 + marks2 + marks3 + marks4;
	const average = totalPoints / 4;
	let grade = '';

	if (average >= 85) {
		grade = 'A';
	}
	else if (average >= 70) {
		grade = 'B';
	}
	else if (average >= 50) {
		grade = 'C';
	}
	else if (average >= 30) {
		grade = 'D';
	}
	else {
		grade = 'E';
	}

	if (typeof name !== 'string') {
		throw new TypeError('Name should not be a ' + typeof name);
	}
	else if (typeof reg !== 'string') {
		throw new TypeError('Registration number should not be a ' + typeof reg);
	}
	else if (typeof marks1 !== 'number' || typeof marks2 !== 'number' || typeof marks3 !== 'number' || typeof marks4 !== 'number') {
		throw new TypeError('Marks should be in number');
	}
	else {
		return `
Name of Student: ${name}
Registration Number: ${reg}
Total Marks: ${totalPoints}
Average Marks: ${average}
Final Grade: ${grade}
		`;
	}
}

console.log(marksCalculator('John Doe', 'lkjhlkk', 99, 70, 80, 90));
