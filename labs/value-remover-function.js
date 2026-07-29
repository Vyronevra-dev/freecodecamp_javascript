function destroyer(arr, ...removeValue) {
  let result = [];

  result.push(arr.filter((item) => !removeValue.includes(item)));

  return result.flat();
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
