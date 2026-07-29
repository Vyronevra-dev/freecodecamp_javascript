function steamrollArray(nestedArray) {
  let result = [];

  for (let item of nestedArray) {
    if (Array.isArray(item)) {
      result.push(...steamrollArray(item));
    }
    else {
      result.push(item);
    }
  }

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]))
