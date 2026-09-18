function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  let restOfRange = rangeOfNumbers(startNum + 1, endNum);

  restOfRange.unshift(startNum);

  return restOfRange;
}

console.log(rangeOfNumbers(2, 5));
