function diffArray(arr1, arr2) {
  let finalArray = [];

  finalArray.push(arr1.filter(function (item) {
    return !arr2.includes(item);
  }));
  
  finalArray.push(arr2.filter(function (item) {
    return !arr1.includes(item);
  }));

  return finalArray.flat();
}

const arrayA = ["diamond", "stick", "apple"];
const arrayB = ["stick", "emerland", "bread"];

console.log(diffArray(arrayA, arrayB));
