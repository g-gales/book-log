import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import log from "loglevel";

//Variables
const bookTitleInput = document.getElementById("bookTitleInput");
const bookAuthorInput = document.getElementById("bookAuthorInput");
const bookGenrenput = document.getElementById("bookGenreInput");
const addBookBtn = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");

const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");

var apiKey;
var genAI;
var model;

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
  await addDoc(collection(db, "books"), {
    genre: bookGenre,
    author: bookAuthor,
    title: bookTitle,
    read: false,
    rating: 0,
  });
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

//Render books
async function renderBooks() {
  var books = await getBooksFromFirestore();
  bookList.innerHTML = "";

  books.forEach((book) => {
    const bookData = book.data();

    const bookItem = document.createElement("li");
    bookItem.id = book.id;
    bookItem.tabIndex = 0;
    bookItem.innerHTML = `
      <article>
        <h3>${bookData.title}</h3>
        <p><strong>Author:</strong> ${bookData.author}</p>
        <p><strong>Genre:</strong> ${bookData.genre}</p>
         <p><strong>Rating:</strong> ${
           bookData.read
             ? `${bookData.rating}/5`
             : `Not yet rated - Rate Now: 
              <input type="number" min="1" max="5" step="1" placeholder="1-5" id="rate-${book.id}" />
              <button id="submit-${book.id}">Rate</button>`
         }</p>
      </article>
      </article>
    `;

    if (!bookData.read) {
      const submitButton = document.getElementById(`submit-${book.id}`);
      submitButton.addEventListener("click", async () => {
        const ratingInput = document.getElementById(`rate-${book.id}`);
        const ratingValue = parseInt(ratingInput.value);

        if (ratingValue >= 1 && ratingValue <= 5) {
          await updateBookRating(book.id, ratingValue);
          renderBooks(); // Re-render to update the display
        } else {
          alert("Please enter a valid rating between 1 and 5.");
        }
      });
    }

    bookList.appendChild(bookItem);
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
addBookBtn.addEventListener("click", async () => {
  const book = bookTitleInput.value.trim();
  if (book) {
    const bookTitle = sanitizeInput(bookTitleInput.value.trim());

    if (bookTitle) {
      await addBookToFirestore(bookTitle);
      renderBooks();
      bookTitleInput.value = "";
    }
    renderBooks();
  } else {
    alert("Please enter a book!");
  }
});

// Add books on page load
window.addEventListener("load", () => {
  renderBooks();
});

//Sanitize Data
function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

//Error Handling and Logging
window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message);
});

// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");
