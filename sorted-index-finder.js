function getIndexToIns(arr, num) {
  arr.sort((num1, num2) => num1 - num2);

  const index = arr.findIndex((item) => item >= num);  

  return index !== -1 ? index : arr.length;
}
