/** We started with: [10, 20, 30, 40, 50, 60, 70]
 * The first mid is at index 3 which is 40.
 * We ask is 40 === 60?
 * Since 40 < 60, we immediately throw away the entire left half
 * So we left with [50, 60, 70]
**/

function binarySearch(arr, target) {
	let lowestIndex = 0;
	let highestIndex = arr.length - 1;
	let comparisons = 0;

	while (lowestIndex <= highestIndex) {
		const middleIndex = Math.floor((lowestIndex + highestIndex) / 2);

		comparisons++;

		console.log(`Comparison ${comparisons}: arr[${middleIndex}] = ${arr[middleIndex]} === ${target}`);

		if (arr[middleIndex] === target) {
			console.log(`Found ${target} at index ${middleIndex}`);
			console.log(`Total comparisons: ${comparisons}`);
			return middleIndex;
		}
		else if (arr[middleIndex] < target) {
			console.log(`${arr[middleIndex]} < ${target} → search right half`);
			lowestIndex = middleIndex + 1;
		}
		else {
			console.log(`${arr[middleIndex]} > ${target} → search left half`);
			higestIndex = middleIndex - 1;
		}
	}

		console.log(`${target} was not found`);
		console.log(`Total comparisons: ${comparisons}`);
		return -1;
}

const numbArr = [10, 20, 30, 40, 50, 60, 70];

const result = binarySearch(numbArr, 60);

console.log("Result: ", result);

/** Let's compare it with your linear search
 * Array: [10, 20, 30, 40, 50, 60, 70]
 *
 * Target: 60
 *
 * Comparison 1 → 10
 * Comparison 2 → 20
 * Comparison 3 → 30
 * Comparison 4 → 40
 * Comparison 5 → 50
 * Comparison 6 → 60 ✅ 
 *
 * 6 Comparisons
 *
 * Binary Search:
 * Array: [10, 20, 30, 40, 50, 60, 70]
 *
 * Comparison 1 → 40 ❌ 
 *                  ↓
 *           discard left half
 *
 * Comparison 2 → 60 ✅ 
 * 2 Comparisons. That's the power of binary search.
**/
