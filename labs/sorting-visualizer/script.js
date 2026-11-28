const arrayContainer = document.getElementById("array-container");
const startingArray = document.getElementById("starting-array");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

let currentArray = [];

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, arr) {
  element.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const span = document.createElement("span");
    span.textContent = arr[i];
    element.appendChild(span);
  }
}

function isOrdered(first, second) {
  return first <= second;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

function highlightCurrentEls(element, index) {
  const children = element.children;
  if (children[index]) {
    children[index].style.border = "2px dashed red";
  }
  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
  }
}

function clearExtraContainers() {
  Array.from(arrayContainer.children).forEach((child) => {
    if (child.id !== "starting-array") {
      child.remove();
    }
  });
}

generateBtn.addEventListener("click", () => {
  clearExtraContainers();
  currentArray = generateArray();
  fillArrContainer(startingArray, currentArray);
});

sortBtn.addEventListener("click", () => {
  clearExtraContainers();

  if (currentArray.length !== 5) {
    currentArray = generateArray();
  }

  const arr = [...currentArray];
  fillArrContainer(startingArray, arr);
  highlightCurrentEls(startingArray, 0);

  let isFirstStep = true;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (isFirstStep && i === 0) {
        if (!isOrdered(arr[i], arr[i + 1])) {
          swapElements(arr, i);
          swapped = true;
        }
        isFirstStep = false;
        continue;
      }

      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, arr);
      highlightCurrentEls(stepDiv, i);
      arrayContainer.appendChild(stepDiv);

      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }
    }
  } while (swapped);

  const sortedDiv = generateContainer();
  fillArrContainer(sortedDiv, arr);
  arrayContainer.appendChild(sortedDiv);
});
