function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let range = [];

  // Fix 1: Use max instead of max.length
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Fix 2: Return the result of reduce
  return range.reduce(function(acc, curr) {
    return lcm(acc, curr);
  });
}
