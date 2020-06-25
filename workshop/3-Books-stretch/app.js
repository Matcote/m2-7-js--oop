class BookList {
  constructor() {
    this.books = [];
    this.lastRead = "Digital Minimalism";
    this.currentlyReading = `Zen Mind Beginner's Mind`;
  }
  add = (book) => {
    this.books.push(book);
    if (this.currentlyReading === null) {
      this.currentlyReading = book;
    }
  };
  getNumRead = () => {
    let total = 0;
    this.books.forEach(function (obj) {
      if (obj.isRead === true) {
        total++;
      }
    });
    return total;
  };
  getNumUnread = () => {
    let total = 0;
    this.books.forEach(function (obj) {
      if (obj.isRead === false) {
        total++;
      }
    });
    return total;
  };
  startReading = (bookTitle) => {
    this.currentlyReading = bookTitle;
  };
  finishReading = (bookTitle) => {
    this.currentlyReading = null;
    this.lastRead = bookTitle;
  };
}
class Book {
  constructor(name, author, genre, link, isRead) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.isRead = isRead || false;
    this.pic = link;
  }
}

let homeLibrary = new BookList();

//initial books
homeLibrary.add(
  new Book(
    "Digital Minimalism",
    "Cal Newport",
    "Non-Fiction",
    "https://images-na.ssl-images-amazon.com/images/I/81Zvj0ewCfL.jpg",
    true
  )
);
homeLibrary.add(
  new Book(
    "Waking Up",
    "Sam Harris",
    "Self-Help/Spirituality",
    "https://images-na.ssl-images-amazon.com/images/I/41rEUNl0y9L.jpg",
    true
  )
);
homeLibrary.add(
  new Book(
    `Zen Mind Beginner's Mind`,
    "Shunryu Suzuki",
    "Zen Buddhism",
    "data:image/jpeg;base64,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",
    false
  )
);
homeLibrary.add(
  new Book(
    "Sapiens",
    "Yuval Noah Harari",
    "History",
    "https://images-na.ssl-images-amazon.com/images/I/71fsQxIlggL.jpg",
    false
  )
);
homeLibrary.add(
  new Book(
    "Emptiness Dancing",
    "Adyashanti",
    "Spirituality",
    "https://images-na.ssl-images-amazon.com/images/I/91xQw63Gh-L.jpg"
  )
);

//create divs for each object with different elements using the objects properties
let library = document.querySelector(".library");
function displayBooks() {
  library.innerHTML = "";
  for (i = 0; i < homeLibrary.books.length; i++) {
    let container = document.createElement("div");
    let pic = document.createElement("img");
    let title = document.createElement("h2");
    let author = document.createElement("h3");
    let genre = document.createElement("h4");
    pic.src = homeLibrary.books[i].pic;
    title.innerText = homeLibrary.books[i].name;
    author.innerText = homeLibrary.books[i].author;
    genre.innerText = homeLibrary.books[i].genre;
    container.classList.add("book");
    library.appendChild(container);
    container.appendChild(pic);
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(genre);

    if (homeLibrary.currentlyReading === homeLibrary.books[i].name) {
      let reading = document.createElement("span");
      reading.innerText = "*Currently Reading*";
      container.appendChild(reading);
    }
    if (homeLibrary.lastRead === homeLibrary.books[i].name) {
      let reading = document.createElement("span");
      reading.innerHTML = "*Most Recent Read*<br>01/04/2020";
      container.appendChild(reading);
    }
  }
}
displayBooks();

function addBook() {
  console.log(document.getElementById("title").innerText);
  homeLibrary.add(
    new Book(
      document.getElementById("title").value,
      document.getElementById("author").value,
      document.getElementById("genre").value,
      document.getElementById("link").value,
      false
    )
  );
  displayBooks();
  document.getElementById("form").reset();
}
