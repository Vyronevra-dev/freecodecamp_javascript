const image = document.querySelectorAll(".gallery-item");
const closeBtn = document.getElementById("close-btn");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-image");

image.forEach((img) => {
  img.addEventListener("click", (e) => {

    if (e.target.src === "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg") {
      lightbox.style.display = "flex";
      lightbox.style.flexDirection = "column";
      lightboxImg.src = "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg";      
    }
    else if (e.target.src === "https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg") {
      lightbox.style.display = "flex";
      lightbox.style.flexDirection = "column";
      lightboxImg.src = "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg";
    }
    else if (e.target.src === "https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg") {
      lightbox.style.display = "flex";
      lightbox.style.flexDirection = "column";
      lightboxImg.src = "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg";
    }

  });
});

closeBtn.addEventListener("click", (e) => {
  if (e.target === closeBtn) {
    lightbox.style.display = "none";
  }
})

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
})
