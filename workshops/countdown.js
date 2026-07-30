function countdown(number) {
  if (number < 1) {
    return [];
  }
  else {
    const countArray = countdown(number - 1);
    countArray.unshift(number);
    return countArray;
  }
};

console.log(countdown(5))
