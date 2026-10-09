function translatePigLatin(str) {
  // Regex pattern matching vowels (a, e, i, o, u)
  const vowelRegex = /[aeiou]/i;

  // Case 1: Word starts with a vowel
  if (vowelRegex.test(str[0])) {
    return str + "way";
  }

  // Find the index of the first vowel
  const firstVowelIndex = str.search(vowelRegex);

  // Case 2: Word has no vowels
  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  // Case 3: Word starts with a consonant or consonant cluster
  const consonantCluster = str.slice(0, firstVowelIndex);
  const remainder = str.slice(firstVowelIndex);

  return remainder + consonantCluster + "ay";
}
