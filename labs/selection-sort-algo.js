function selectionSort(array) {
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position holds the minimum value
    let minIndex = i;
    
    // Find the index of the minimum value in the remaining unsorted array
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  
  return array;
}
