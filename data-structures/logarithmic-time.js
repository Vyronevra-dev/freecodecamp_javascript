/** O(log n) - Logarithmic Time
 * The work shrinks by a fraction (usually half) each step so it barely grows even as n gets huge.
 * For loop cuts the search space in half. Searching 1000 items take about 10 comparisons; searching 1,000,000 items take about 20. That's the power of logarithmic growth.
**/

function binarySearch(sortedArr, target) {
	let lowestIndex = 0;
	let highestIndex = sortedArr.length - 1;

	while (lowestIndex <= highestIndex) {
		const middleIndex = Math.floor((lowestIndex + highestIndex) / 2);

		console.log(`Lowest Index: ${lowestIndex}, Middle Index: ${middleIndex}, Highest Index: ${highestIndex}`);
		if (sortedArr[middleIndex] === target) return `${sortedArr[middleIndex]} is in the middle of the array. With index ${middleIndex}.`;
		if (sortedArr[middleIndex] < target) lowestIndex = middleIndex + 1;
		else highestIndex = middleIndex - 1;
	}
	return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 40));
