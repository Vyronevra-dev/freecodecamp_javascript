/** O(n) - Linear Time
 * Work grows proportionally with input size.
 *
**/

function findMax(arr) {
	let max = arr[0];
	for (const num of arr) {
		if (num > max) max = num;
	}
	return max;
}

console.log(findMax([23, 41, 60, 8, 10, 12, 39, 201]));
