const textInput = document.getElementById("text-input");
let charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let inputLength = textInput.value.length;

  if (inputLength >= 50) {

    textInput.value = textInput.value.slice(0, 50);
    charCount.style.color = "red";
    charCount.textContent = `Character Count: 50/50`;
    return;
  }

    charCount.style.color = "#f0f0f0";
    charCount.textContent = `Character Count: ${inputLength}/50`;
});
