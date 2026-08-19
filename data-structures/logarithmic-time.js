/** O(log n) - Logarithmic Time
 * The work shrinks by a fraction (usually half) each step so it barely grows even as n gets huge.
 * For loop cuts the search space in half. Searching 1000 items take about 10 comparisons; searching 1,000,000 items take about 20. That's the power of logarithmic growth.
**/

function binarySearch(sortedArr, target) {
	let low = 0;
	let high = sortedArr.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (sortedArr[mid] === target) return mid;
		if (sortedArr[mid] < target) low = mid + 1;
		else high = mid - 1;
	}
	return -1;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 45], 23));
