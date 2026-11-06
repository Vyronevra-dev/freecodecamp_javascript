function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let j = i - 1;
    
    // Shift elements of the sorted segment to the right 
    // if they are greater than the current value
    while (j >= 0 && array[j] > currentVal) {
      array[j + 1] = array[j];
      j--;
    }
    
    // Insert the current value into its correct position
    array[j + 1] = currentVal;
  }
  
  return array;
}
