// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(name, author, genre, isRead) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.isRead = isRead || false;
  }
}
let book1 = new Book("Digital Minimalism", "Cal Newport", "Non-Fiction", true);
let book2 = new Book("Waking Up", "Sam Harris", "Self-Help/Spirituality", true);
let book3 = new Book(
  `Zen Mind Beginner's Mind`,
  "Shunryu Suzuki",
  "Zen Buddhism",
  false
);
let book4 = new Book("Sapiens", "Yuval Noah Harari", "History", false);
let book5 = new Book("Emptiness Dancing", "Adyashanti", "Spirituality");
console.log(book1, book2, book3, book4, book5);
