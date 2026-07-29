 const books = [
 { title: 'A', pages: 210 },
 { title: 'B', pages: 340 },
   { title: 'C', pages: 480 }
];

// Using the same books array, use .reduce() to calculate the total number of pages across all books.

const totalPages = books.reduce((acc, curr) => acc + curr.pages, 0);
console.log(totalPages);
