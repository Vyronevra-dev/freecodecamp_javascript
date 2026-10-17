// 1. Create a variable named currentDate and assign it the current date and time using the Date object
const currentDate = new Date();

// 2. Create a variable named currentDateFormat and assign it the string with the current date
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// 3. Log the value of currentDateFormat to the console
console.log(currentDateFormat);

// 4 & 5. Create a function named formatDateMMDDYYYY that takes the date object and returns the MM/DD/YYYY format
function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString('en-US')}`;
}

// 6 & 7. Create a function named formatDateLong that takes the date object and returns the Month Day, Year format
function formatDateLong(date) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return `Formatted Date (Month Day, Year): ${date.toLocaleDateString('en-US', options)}`;
}
