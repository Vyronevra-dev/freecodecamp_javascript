function isLeapYear(inputYear) {
  if (inputYear % 400 === 0) {
    return inputYear + " is a leap year.";
  }
  else if (inputYear % 100 === 0) {
    return inputYear + " is not a leap year.";
  } 
  else if (inputYear % 4 === 0) {
    return inputYear + " is a leap year.";
  }
  else {
    return inputYear + " is not a leap year.";
  }
}

const year = 1900;

const result = isLeapYear(year);
console.log(result);
