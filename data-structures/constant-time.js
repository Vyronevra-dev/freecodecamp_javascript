/** O(1) - CONSTANT TIME
* The number operation never changes no matter how big the input is.
*
* Whether an array has 5 elements or 5 millions, this does exactly one operation: grabs the item at index 0. That's why array access by index
* 0(1) 
**/

function getFirstElement(arr) {
	return arr[0];
}

console.log(getFirstElement([10, 20, 30, 40, 50]));
