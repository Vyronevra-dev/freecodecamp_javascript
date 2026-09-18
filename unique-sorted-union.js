function uniteUnique(arr1, arr2, ...rest) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
    else {
      continue;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!result.includes(arr2[j])) {
      result.push(arr2[j]);
    }
    else {
      continue;
    }
  }

  let restArr = rest.flat();

  for (let k = 0; k < restArr.length; k++) {
    if (!result.includes(restArr[k])) {
      result.push(restArr[k]);
    }
    else {
      continue;
    }
  }

  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1], [1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
