function quicksort(array) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Choose a pivot element (here, we choose the middle element)
  const pivot = array[Math.floor(array.length / 2)];
  const left = [];
  const middle = [];
  const right = [];

  // Partition the array into sub-arrays relative to the pivot
  for (let num of array) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      middle.push(num);
    }
  }

  // Recursively sort the sub-arrays and combine them with the pivot values
  return [...quicksort(left), ...middle, ...quicksort(right)];
}
