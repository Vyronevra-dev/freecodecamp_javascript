function reverseString(str) {
  let reversedStr = str.split("").reverse().join("");

  return reversedStr;
}

console.log(reverseString("hello"));
