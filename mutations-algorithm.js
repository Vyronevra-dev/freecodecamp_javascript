function mutation(arr) {
  for (let i = 0; i < arr[1].length; i++) {
    if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
    return false;
    }
  }
  return true;
}
