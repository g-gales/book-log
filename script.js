import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import log from "loglevel";

//Variables
const bookTitleInput = document.getElementById("bookTitleInput");
const bookAuthorInput = document.getElementById("bookAuthorInput");
const bookGenreInput = document.getElementById("bookGenreInput");
const addBookBtn = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");

// const aiButton = document.getElementById("send-btn");
// const aiInput = document.getElementById("chat-input");
// const chatHistory = document.getElementById("chat-history");

// var apiKey;
// var genAI;
// var model;

//Genre map to properly display genre title
const genreMap = {
  fantasy: "Fantasy",
  hfiction: "Historical Fiction",
  mystthrill: "Mystery/Thriller",
  nfiction: "Non-Fiction",
  romance: "Romance",
  scifi: "SciFi",
  selfhelp: "Self Help",
};

//Firebase
//Config for Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAVzGsqCJ8E--t-8quYMumYnM2TYTLGtGQ",
  authDomain: "book-log-fb757.firebaseapp.com",
  projectId: "book-log-fb757",
  storageBucket: "book-log-fb757.firebasestorage.app",
  messagingSenderId: "654188780908",
  appId: "1:654188780908:web:3900dcbab3d9a5e6456749",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Add data to Firebase
async function addBookToFirestore(bookTitle, bookAuthor, bookGenre) {
  let book = await addDoc(collection(db, "books"), {
    genre: bookGenre,
    author: bookAuthor,
    title: bookTitle,
    read: false,
    rating: 0,
    removed: false,
  });
  return book.id;
}

//Fetch books from Firestore when app loads
async function getBooksFromFirestore() {
  var data = await getDocs(collection(db, "books"));
  let userData = [];
  data.forEach((doc) => {
    userData.push(doc);
  });
  return userData;
}

//Chatbot
// function ruleChatBot(request) {
//   if (request.startsWith("add book")) {
//     let book = request.replace("add book", "").trim();
//     if (book) {
//       addBook(task);
//       appendMessage("Task " + task + " added!");
//     } else {
//       appendMessage("Please specify a task to add.");
//     }
//     return true;
//   } else if (request.startsWith("complete")) {
//     let taskName = request.replace("complete", "").trim();
//     if (taskName) {
//       if (removeFromTaskName(taskName)) {
//         appendMessage("Task " + taskName + " marked as complete.");
//       } else {
//         appendMessage("Task not found!");
//       }
//     } else {
//       appendMessage("Please specify a task to complete.");
//     }
//     return true;
//   }

//   return false;
// }

//Render books
async function renderBooks() {
  var books = await getBooksFromFirestore();
  bookList.innerHTML = "";

  let bookArr = [];

  books.forEach((book) => {
    const bookData = book.data();

    bookArr.push({
      id: book.id,
      author: bookData.author,
      genre: bookData.genre,
      rating: bookData.rating,
      read: bookData.read,
      title: bookData.title,
      removed: bookData.removed,
    });
  });

  bookArr.sort((a, b) => {
    const authorA = a.author.toUpperCase();
    const authorB = b.author.toUpperCase();
    if (authorA < authorB) {
      return -1;
    }
    if (authorA > authorB) {
      return 1;
    }
    return 0;
  });

  bookArr.forEach((book) => {
    if (!book.removed) {
      createBookItem(book.id, book);
    }
  });
}

// Function to update rating and mark book as read
async function updateBookRating(bookId, rating) {
  const bookRef = doc(db, "books", bookId);
  await updateDoc(bookRef, {
    rating: rating,
    read: true,
  });
}

//Add book
async function addBook(bookTitle, bookAuthor, bookGenre) {
  let book = await addBookToFirestore(bookTitle, bookAuthor, bookGenre);
  bookAuthorInput.value = "";
  bookGenreInput.value = "";
  bookTitleInput.value = "";

  let bookObject = await getDoc(book);
  createBookItem(book.id, bookObject.data());
}

//Remove book from firestore rendering
async function removeBook(bookId) {
  await updateDoc(doc(db, "books", bookId), {
    removed: true,
  });
}

//Remove book from DOM
function removeVisualBook(bookId) {
  document.getElementById(bookId).remove();
}

//Create Book DOM Element
function createBookItem(bookId, bookObject) {
  let bookItem = document.createElement("article");

  bookItem.id = bookId;
  bookItem.tabIndex = 0;
  bookItem.classList.add("book");
  //Adds a new book item, if the book is yet rated, adds an input to rate it
  bookItem.innerHTML = `
    <div class="book-header">
      <h3 class="book-title">${bookObject.title}</h3>
      <p class="book-author">By: ${bookObject.author}</p>
    </div>
    <p class="book-genre"> Genre: ${genreMap[bookObject.genre] || "Unknown"}</p>
    <div class="book-rating"> ${
      bookObject.read
        ? `<p class="read">Rating: ${bookObject.rating}/5</p>`
        : `<p class="not-read">Submit a Rating When Read</p>
        <div class="book-rating-input">
          <input type="number" min="1" max="5" placeholder="1-5" id="rate-${bookId}" />
          <button id="submit-${bookId}">I've Read It!</button>
        </div>`
    }
    </div>
    <button id="remove-${bookId}" class="remove-btn">Remove Book</button>`;

  bookList.appendChild(bookItem);

  //  adds functionality to new rating button
  if (!bookObject.read) {
    const submitButton = document.getElementById(`submit-${bookId}`);
    submitButton.addEventListener("click", async () => {
      const ratingInput = document.getElementById(`rate-${bookId}`);
      const ratingValue = parseInt(ratingInput.value);

      if (ratingValue >= 1 && ratingValue <= 5) {
        await updateBookRating(bookId, ratingValue);
        renderBooks();
      } else {
        alert("Please enter a valid rating between 1 and 5.");
      }
    });
  }

  const removeButton = document.getElementById(`remove-${bookId}`);
  removeButton.addEventListener("click", async (e) => {
    if (e.target.parentNode.tagName === "ARTICLE") {
      removeBook(e.target.parentNode.id);
      removeVisualBook(e.target.parentNode.id);
    }
  });
}

// Add books on page load
window.addEventListener("load", () => {
  // getApiKey();
  renderBooks();
});

addBookBtn.addEventListener("click", async (event) => {
  event.preventDefault(); //Prevent default form submission

  const title = bookTitleInput.value.trim();
  const author = bookAuthorInput.value.trim();
  const genre = bookGenreInput.value.trim();

  if (title && author && genre) {
    const bookTitle = sanitizeInput(title);
    const bookAuthor = sanitizeInput(author);
    const bookGenre = sanitizeInput(genre);

    await addBook(bookTitle, bookAuthor, bookGenre);
  } else {
    alert("Please fill out all fields!");
  }
});

//Sanitize Data
function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

bookAuthorInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addBookBtn.click();
  }
});

bookTitleInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addBookBtn.click();
  }
});

bookGenreInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addBookBtn.click();
  }
});

bookList.addEventListener("keypress", async function (e) {
  if (e.target.className === "remove-btn" && e.key === "Enter") {
    removeBook(e.target.id);
    removeVisualBook(e.target.id);
  }
});

//Error Handling and Logging
window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message);
});

// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");
