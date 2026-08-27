/** Trace through a linear search for the target value 7. Write down which index is checked at each step,
 * and how many comparisons are made in total before it is found.
**/


function linearSearch(arr, target) {
	let comparisons = 0;

	for (let i = 0; i < arr.length; i++) {

		 comparisons++;

		if (arr[i] === target) {
			console.log(`Comparison: ${comparisons} → Target ${target} found at index ${i}`);
			console.log(`Total Comparisons: ${comparisons}`);		
			return;
		}
		else {
			console.log(`Comparison: ${comparisons} → Target ${target} still not found`);
		}
	}
	console.log(`Target ${target} not found`);
	return -1;
}

const array = [4, 9, 1, 7, 3];

console.log(linearSearch(array, 10));
