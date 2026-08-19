/** O(n log n) - Log-Linear Time.
 * Common in efficient sorting: you do a logarithmic amount of "splitting" work, but at each of the log levels you touch all n items.
**/

function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

function merge(left, right) {
	const result = [];
	let i = 0, j = 0;
	while (i < left.length && j < right.length) {
		result.push(left[i] <= right[j] ? left[i++] : right[j++]);
	}
	return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([8, 3, 5, 9, 1, 2]));
