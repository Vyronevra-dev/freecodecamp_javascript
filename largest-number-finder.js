function largestOfAll(arr) {
  let results = [];
  
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    // Start with the first number converted to a Number type
    let largest = Number(subArr[0]); 
    
    for (let j = 1; j < subArr.length; j++) {
      let current = Number(subArr[j]);
      if (current > largest) {
        largest = current;
      }
    }
    results.push(largest);
  }
  
  return results;
}

