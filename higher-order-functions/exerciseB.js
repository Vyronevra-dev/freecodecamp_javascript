const students = [
	{name: "A", score: 90, form: 3},
	{name: "B", score: 33, form: 2},
	{name: "C", score: 80, form: 1},
	{name: "D", score: 49, form: 2},
	{name: "E", score: 9, form: 3}
];

const studentss = students.filter((student) => student.score >= 50 && student.form === 3);
console.log(studentss);
