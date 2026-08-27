/** Fill in the blanks to complete this linear search function. It should return the index of target if found, or -1 if it is not in
the array.
function linearSearch(arr, target) {
 for (let i = 0; i < __________; i++) {
 if (arr[i] === __________) {
 return __________;
 }
 }
 return __________;
}
**/

function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}

console.log(linearSearch([10, 20, 30, 40, 50, 60], 40));
