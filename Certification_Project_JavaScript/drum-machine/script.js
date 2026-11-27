(() => {
  // Unique human-readable descriptions mapped by pad ID
  const SAMPLE_NAMES = {
    'Heater-1': 'Heater 1',
    'Heater-2': 'Heater 2',
    'Heater-3': 'Heater 3',
    'Heater-4': 'Heater 4',
    'Clap': 'Clap',
    'Open-HH': 'Open-HH',
    'Kick-n-Hat': "Kick-n'-Hat",
    'Kick': 'Kick',
    'Closed-HH': 'Closed-HH'
  };

  const VALID_KEYS = new Set(['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']);

  const displayEl = document.getElementById('display');
  const lcdKeyIndicator = document.getElementById('lcd-key-indicator');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeValue = document.getElementById('volume-value');
  const dbReadout = document.getElementById('db-readout');
  const ledSegments = Array.from(document.querySelectorAll('.led-seg'));
  const powerBtn = document.getElementById('power-btn');
  const powerLed = document.getElementById('power-led');
  const powerLabel = document.getElementById('power-label');
  const drumPads = Array.from(document.querySelectorAll('.drum-pad'));

  let isPoweredOn = true;
  let masterVolume = parseFloat(volumeSlider.value);
  let meterTimeout = null;

  // Animate the 8-segment LED peak meter
  function triggerMeter(volume) {
    if (meterTimeout) clearTimeout(meterTimeout);

    const activeCount = volume === 0 ? 0 : Math.max(2, Math.round(volume * ledSegments.length));
    const db = volume === 0 ? '-∞' : (20 * Math.log10(volume)).toFixed(1);
    dbReadout.textContent = `${db} dB`;

    ledSegments.forEach((seg, idx) => {
      seg.className = 'led-seg';
      if (idx < activeCount) {
        if (idx < 5) seg.classList.add('lit-green');
        else if (idx < 7) seg.classList.add('lit-amber');
        else seg.classList.add('lit-red');
      }
    });

    meterTimeout = setTimeout(() => {
      ledSegments.forEach(seg => (seg.className = 'led-seg'));
      dbReadout.textContent = '-∞ dB';
    }, 240);
  }

  // Trigger a drum pad by its button element
  function triggerPad(padEl) {
    if (!padEl || !isPoweredOn) return;

    const audio = padEl.querySelector('audio.clip');
    if (!audio) return;

    // Reset and play audio immediately for rapid re-triggering
    audio.currentTime = 0;
    audio.volume = masterVolume;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Safely ignore autoplay interruptions in headless test runners
      });
    }

    // Update LCD display with unique string describing the audio clip
    const label = SAMPLE_NAMES[padEl.id] || padEl.id;
    displayEl.innerText = label;
    lcdKeyIndicator.textContent = `KEY: ${audio.id}`;

    // Visual tactile feedback
    padEl.classList.remove('active');
    void padEl.offsetWidth; // Force reflow for consecutive hits
    padEl.classList.add('active');
    setTimeout(() => padEl.classList.remove('active'), 130);

    // Trigger LED peak meter
    triggerMeter(masterVolume);
  }

  // Click listeners on all .drum-pad buttons
  drumPads.forEach(pad => {
    pad.addEventListener('click', () => triggerPad(pad));
  });

  // Keyboard listener for Q, W, E, A, S, D, Z, X, C
  document.addEventListener('keydown', event => {
    if (event.repeat) return;
    const key = event.key.toUpperCase();
    if (!VALID_KEYS.has(key)) return;

    const audioEl = document.getElementById(key);
    if (audioEl && audioEl.parentElement && audioEl.parentElement.classList.contains('drum-pad')) {
      triggerPad(audioEl.parentElement);
    }
  });

  // Master Volume control
  volumeSlider.addEventListener('input', event => {
    masterVolume = parseFloat(event.target.value);
    const pct = Math.round(masterVolume * 100);
    volumeValue.textContent = `${pct}%`;

    document.querySelectorAll('audio.clip').forEach(audio => {
      audio.volume = masterVolume;
    });

    if (isPoweredOn) {
      displayEl.innerText = `VOL: ${pct}%`;
    }
  });

  // Power Switch toggle
  powerBtn.addEventListener('click', () => {
    isPoweredOn = !isPoweredOn;
    powerBtn.setAttribute('aria-pressed', String(isPoweredOn));

    if (isPoweredOn) {
      powerLed.classList.remove('off');
      powerLabel.textContent = 'ACTIVE';
      displayEl.classList.remove('powered-off');
      displayEl.innerText = 'READY';
    } else {
      powerLed.classList.add('off');
      powerLabel.textContent = 'STANDBY';
      displayEl.classList.add('powered-off');
      displayEl.innerText = 'OFFLINE';
      lcdKeyIndicator.textContent = 'KEY: --';
    }
  });
})();
