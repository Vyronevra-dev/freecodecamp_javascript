document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const resultDiv = document.getElementById('result');
  
  const analysisBox = document.getElementById('analysis');
  const statOriginal = document.getElementById('stat-original');
  const statCleaned = document.getElementById('stat-cleaned');
  const statReversed = document.getElementById('stat-reversed');
  const letterMatrix = document.getElementById('letter-matrix');
  const presetBtns = document.querySelectorAll('.preset-btn');

  function checkPalindrome() {
    const rawValue = textInput.value;

    // Requirement 4: Alert if value is empty
    if (!rawValue) {
      alert('Please input a value');
      return;
    }

    // Process alphanumeric check (case-insensitive, strip all non-alphanumeric chars)
    const cleanedValue = rawValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedValue = cleanedValue.split('').reverse().join('');
    const isPalindrome = cleanedValue === reversedValue;

    // Update main result div (strictly adhering to FCC exact string specs)
    resultDiv.classList.remove('hidden', 'is-palindrome', 'not-palindrome');
    
    if (isPalindrome) {
      resultDiv.innerText = `${rawValue} is a palindrome.`;
      resultDiv.classList.add('is-palindrome');
    } else {
      resultDiv.innerText = `${rawValue} is not a palindrome.`;
      resultDiv.classList.add('not-palindrome');
    }

    // Render visual breakdown card
    renderAnalysis(rawValue, cleanedValue, reversedValue, isPalindrome);
  }

  function renderAnalysis(original, cleaned, reversed, isPalindrome) {
    analysisBox.classList.remove('hidden');
    statOriginal.textContent = original;
    statCleaned.textContent = cleaned || '(none)';
    statReversed.textContent = reversed || '(none)';

    letterMatrix.innerHTML = '';

    if (!cleaned) return;

    // Build character matching visual matrix
    for (let i = 0; i < cleaned.length; i++) {
      const badge = document.createElement('div');
      const isMatch = cleaned[i] === reversed[i];
      badge.className = `char-badge mono ${isMatch ? 'match' : 'mismatch'}`;
      badge.textContent = cleaned[i];
      letterMatrix.appendChild(badge);
    }
  }

  // Event Listeners
  checkBtn.addEventListener('click', checkPalindrome);

  textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      checkPalindrome();
    }
  });

  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-value');
      textInput.value = val;
      checkPalindrome();
    });
  });
g);
