function dropElements(arr, func) {
  const index = arr.findIndex(func);

  if (index === -1) {
    return [];
  }

  return arr.slice(index);
}
