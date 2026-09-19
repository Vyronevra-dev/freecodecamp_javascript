function pairElement(str) {
  // Define the base pair mappings
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // Split the string into characters and map each character to its pair
  return str.split("").map(base => [base, pairs[base]]);
}
