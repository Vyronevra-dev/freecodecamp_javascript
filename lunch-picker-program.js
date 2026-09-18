const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(str + " added to the end of the lunch menu.");  
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(str + " added to the start of the lunch menu.");
  return arr;
}

function removeLastLunch(arr) {
  const lastRemoved = arr.pop();

  if (arr.length !== 0) {
  console.log(lastRemoved + " removed from the end of the lunch menu.");
  }

  else if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  const firstRemoved = arr.shift();

  if (arr.length !== 0) {
    console.log(firstRemoved + " removed from the start of the lunch menu.");
  }

  else if (arr.length === 0) {
    console.log("No lunches to remove.");
  }

  else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  let randomLunchIndex = Math.floor(Math.random() * arr.length);

  if (randomLunchIndex >= 0 && randomLunchIndex <= arr.length - 1) {
    console.log("Randomly selected lunch: " + arr[randomLunchIndex]);
  }

  else if (arr.length === 0) {
    console.log("No lunches available.");
  }

  else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length !== 0) {
    console.log("Menu items: " + arr.join(", "));
  }

  else if (arr.length === 0) {
    console.log("The menu is empty.");
  }

  else {
    console.log("The menu is empty.");
  }
}

console.log(addLunchToEnd(lunches, "Tacos"));

console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

console.log(addLunchToStart(lunches, "Sushi"));

console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));

console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));

console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));

console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));
