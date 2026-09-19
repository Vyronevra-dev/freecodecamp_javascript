function sumAll([num1, num2]) {
  let low = 0;
  let high = 0;

  if (num1 < num2) {
    low = num1;
    high = num2;
  }
  else {
    low = num2;
    high = num1;
  }

  let sortedArr = [low, high];
  let accumulator = 0;

  while (low <= high) {
    accumulator += low;
    low++;
  }

  return accumulator;
}

console.log(sumAll([4, 1]));
