function permuteString(string, prefix = "", results = []) {
  if (string.length === 0) {
    if (!results.includes(prefix)) {
      results.push(prefix);
    }
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    let remaining = string.slice(0, i) + string.slice(i + 1);
    let char = string[i];
    permuteString(remaining, prefix + char, results);
  }

  return Array.from(new Set(results));
};

console.log(permuteString("extravaganza"));
