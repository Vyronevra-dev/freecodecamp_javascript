
const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (!Array.isArray(bookmarks)) {
      return [];
    }

    return bookmarks.filter(
      bookmark =>
        bookmark &&
        typeof bookmark === "object" &&
        typeof bookmark.name === "string" &&
        typeof bookmark.category === "string" &&
        typeof bookmark.url === "string"
    );
  } catch {
    return [];
  }
};

const displayOrCloseForm = () => {
  document.getElementById("main-section").classList.toggle("hidden");
  document.getElementById("form-section").classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  document.getElementById("main-section").classList.toggle("hidden");
  document.getElementById("bookmark-list-section").classList.toggle("hidden");
};

const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
const categoryList = document.getElementById("category-list");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

// Escape special HTML characters in bookmark names and URLs.
const escapeHTML = value =>
  value.replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

// Open the bookmark form.
addBookmarkButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

// Close the bookmark form.
closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

// Save a new bookmark.
addBookmarkButtonForm.addEventListener("click", event => {
  event.preventDefault();

  const bookmarks = getBookmarks();

  const bookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  };

  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

// Render the bookmarks belonging to the selected category.
const renderCategoryBookmarks = category => {
  const bookmarks = getBookmarks().filter(
    bookmark => bookmark.category === category
  );

  // Clear the previous category before displaying the new one.
  categoryList.innerHTML = "";

  if (bookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  bookmarks.forEach(bookmark => {
    const safeName = escapeHTML(bookmark.name);
    const safeURL = escapeHTML(bookmark.url);

    categoryList.innerHTML += `
      <div>
        <input
          type="radio"
          id="${safeName}"
          value="${safeName}"
          name="bookmark-radio"
        >
        <label for="${safeName}">
          <a href="${safeURL}" target="_blank" rel="noopener noreferrer">${safeName}</a>
        </label>
      </div>
    `;
  });
};

// Open the selected category.
viewCategoryButton.addEventListener("click", () => {
  const category = categoryDropdown.value;

  categoryName.innerText = category;
  renderCategoryBookmarks(category);
  displayOrHideCategory();
});

// Close the bookmark list.
closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

// Delete the selected bookmark from the selected category.
deleteBookmarkButton.addEventListener("click", () => {
  const selectedRadio = categoryList.querySelector(
    'input[name="bookmark-radio"]:checked'
  );

  if (!selectedRadio) {
    return;
  }

  const category = categoryDropdown.value;
  const bookmarkName = selectedRadio.value;

  const bookmarks = getBookmarks();

  // Find the matching bookmark by name and category.
  const index = bookmarks.findIndex(
    bookmark =>
      bookmark.name === bookmarkName &&
      bookmark.category === category
  );

  if (index !== -1) {
    bookmarks.splice(index, 1);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // Refresh the current category without closing the list.
  renderCategoryBookmarks(category);
});

