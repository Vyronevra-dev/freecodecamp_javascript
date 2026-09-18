const books = [
  {
    title: "New Slaves",
    authorName: "Kanye West",
    releaseYear: 1933
  },
  {
    title: "Empty Outside",
    authorName: "Donda West",
    releaseYear: 1890
  },
  {
    title: "Overseas",
    authorName: "Ken Carson",
    releaseYear: 1983
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  else {
    return 0;
  }
}

console.log(sortByYear(books[0], books[1]))

const filteredBooks = books.filter((book) => book.releaseYear < 1950);

filteredBooks.sort(sortByYear);
console.log(filteredBooks);

