const favIcons = document.querySelectorAll(".favorite-icon");

favIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    
    if (!icon.classList.contains("filled")) {
      icon.classList.add("filled");
      icon.textContent = "\u2764";
    } else {
      icon.classList.remove("filled");
      icon.textContent = "\u2661"
    }
  })
});
