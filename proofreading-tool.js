// 1. Check if a word is a palindrome (case-insensitive)
function isPalindrome(word) {
  if (typeof word !== "string") return false;
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split("").reverse().join("");
  return lowerWord === reversedWord;
}

// 2. Find indices of words that are not palindromes
function findPalindromeBreaks(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return [];
  }

  const breakIndices = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breakIndices.push(i);
    }
  }

  return breakIndices;
}

// 3. Find start indices of repeated phrases of a given length (including the first occurrence and overlaps)
function findRepeatedPhrases(words, phraseLength) {
  if (!Array.isArray(words) || phraseLength >= words.length || phraseLength <= 0) {
    return [];
  }

  // Extract all phrases of the given length as joined strings (or arrays) along with their start indices
  const phraseMap = new Map(); // key: phrase string, value: array of start indices

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phraseSlice = words.slice(i, i + phraseLength);
    // Use JSON.stringify or join to safely map multi-word phrases as keys
    const phraseKey = JSON.stringify(phraseSlice.map(w => w.toLowerCase()));

    if (!phraseMap.has(phraseKey)) {
      phraseMap.set(phraseKey, []);
    }
    phraseMap.get(phraseKey).push(i);
  }

  // Collect all indices where the phrase appears more than once
  let resultIndices = [];
  for (let [key, indices] of phraseMap.entries()) {
    if (indices.length > 1) {
      resultIndices.push(...indices);
    }
  }

  // Sort the resulting start indices numerically to maintain logical order
  return resultIndices.sort((a, b) => a - b);
}

// 4. Process an array of texts and return an array of objects with repeatedPhrases and palindromeBreaks
function analyzeTexts(texts, phraseLength) {
  if (!Array.isArray(texts) || texts.length === 0) {
    return [];
  }

  const results = [];
  for (let i = 0; i < texts.length; i++) {
    const words = texts[i];
    const palindromeBreaks = findPalindromeBreaks(words);
    const repeatedPhrases = findRepeatedPhrases(words, phraseLength);

    results.push({
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks
    });
  }

  return results;
}
