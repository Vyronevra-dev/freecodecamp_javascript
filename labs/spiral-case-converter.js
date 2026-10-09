function spinalCase(str) {
  return str
    // Step 1: Add a space between lowercase and uppercase letters (camelCase handling)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Step 2: Replace all spaces and underscores with a hyphen
    .replace(/[\s_]+/g, '-')
    // Step 3: Convert the entire string to lowercase
    .toLowerCase();
}
