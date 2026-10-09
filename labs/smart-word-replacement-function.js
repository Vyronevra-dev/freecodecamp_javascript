function myReplace(str, before, after) {
  // Check if the first character of `before` is uppercase
  const isCapitalized = before[0] === before[0].toUpperCase();

  // Adjust `after` to match the casing of `before[0]`
  const formattedAfter = isCapitalized
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);

  // Perform the replacement
  return str.replace(before, formattedAfter);
}
