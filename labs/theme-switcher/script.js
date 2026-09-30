// Themes array satisfying requirements 17-21
const themes = [
  {
    name: "light",
    message: "Light theme activated! Bright and clear view."
  },
  {
    name: "dark",
    message: "Dark theme activated! Easy on the eyes."
  },
  {
    name: "ocean",
    message: "Ocean theme activated! Deep blue relaxation."
  }
];

// Element references
const switcherBtn = document.getElementById("theme-switcher-button");
const dropdownMenu = document.getElementById("theme-dropdown");
const liveRegion = document.querySelector('[aria-live="polite"]');

// Toggle dropdown visibility when button is clicked
switcherBtn.addEventListener("click", () => {
  const isHidden = dropdownMenu.hasAttribute("hidden");

  if (isHidden) {
    dropdownMenu.removeAttribute("hidden");
    switcherBtn.setAttribute("aria-expanded", "true");
  } else {
    dropdownMenu.setAttribute("hidden", "");
    switcherBtn.setAttribute("aria-expanded", "false");
  }
});

// Event listener for theme selection from menu items
dropdownMenu.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.getAttribute("role") === "menuitem") {
    const selectedThemeName = target.textContent.trim().toLowerCase();
    
    // Find matching theme object
    const themeObj = themes.find(t => t.name === selectedThemeName);

    if (themeObj) {
      // Remove any existing theme-* classes from <body>
      const existingThemeClasses = Array.from(document.body.classList).filter(cls => cls.startsWith("theme-"));
      existingThemeClasses.forEach(cls => document.body.classList.remove(cls));

      // Add corresponding theme class
      document.body.classList.add(`theme-${themeObj.name}`);

      // Update aria-live="polite" element with message
      liveRegion.textContent = themeObj.message;

      // Close menu
      dropdownMenu.setAttribute("hidden", "");
      switcherBtn.setAttribute("aria-expanded", "false");
    }
  }
});

// Close dropdown if clicking outside
document.addEventListener("click", (e) => {
  if (!switcherBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.setAttribute("hidden", "");
    switcherBtn.setAttribute("aria-expanded", "false");
  }
});
