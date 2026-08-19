/** O(n²) - Quadratic Time
 * A loop inside a loop, both scaling with n.
**/

function hasDuplicated(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) return true;
		}
	}
	return false;
}

console.log(hasDuplicated([2, 10, 4, 8, 6, 4, 8, 2, 10]));
