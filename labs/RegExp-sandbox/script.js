const regexPattern = document.getElementById('pattern');

const stringToTest = document.getElementById('test-string');

const testButton = document.getElementById('test-btn');

const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');

const globalFlag = document.getElementById('g');

function getFlags() {
  if (caseInsensitiveFlag.checked && globalFlag.checked) {
    return 'ig';
  }
  else if (caseInsensitiveFlag.checked) {
    return 'i';
  }
  else if (globalFlag.checked) {
    return 'g';
  }
  
  return '';
}

testButton.addEventListener('click', () => {
  const regex = new RegExp(regexPattern.value, getFlags());

  const str = stringToTest.textContent;

  if (regex.test(str)) {
    const replacement = str.replace(regex, (match) => {
      return `<span class="highlight">${match}</span>`;
    });

    stringToTest.innerHTML = replacement;
  }

  const matches = str.match(regex);

  if (matches !== null) {
    result.textContent = matches.join(", ");
  }
  else {
    result.textContent = 'no match';
  }

});
