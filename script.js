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
    //Adds a new book item, if the book is yet rated, adds an input to rate it
    bookItem.innerHTML = `
      <article>
        <div class="book-header">
          <h3 class="book-title">${bookData.title}</h3>
          <p class="book-author">By: ${bookData.author}</p>
        </div>
        <p class="book-genre"> ${genreMap[bookData.genre] || "Unknown"}</p>
        <p class="book-rating"><strong>Rating:</strong> ${
          bookData.read
            ? `${bookData.rating}/5`
            : `Not yet rated - Rate Now!
            <div class="book-rating-input">
         <input type="number" min="1" max="5" placeholder="1-5" id="rate-${book.id}" />
         <button id="submit-${book.id}">Submit</button>
       </div>`
        }</p>
      </article>
    `;
    bookList.appendChild(bookItem);

    //adds functionality to new rating button
    if (!bookData.read) {
      const submitButton = document.getElementById(`submit-${book.id}`);
      submitButton.addEventListener("click", async () => {
        const ratingInput = document.getElementById(`rate-${book.id}`);
        const ratingValue = parseInt(ratingInput.value);

        if (ratingValue >= 1 && ratingValue <= 5) {
          await updateBookRating(book.id, ratingValue);
          renderBooks();
        } else {
          alert("Please enter a valid rating between 1 and 5.");
        }
      });
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
addBookBtn.addEventListener("click", async (event) => {
  event.preventDefault(); //Prevent default form submission

  const title = bookTitleInput.value.trim();
  const author = bookAuthorInput.value.trim();
  const genre = bookGenreInput.value.trim();

  if (title && author && genre) {
    const bookTitle = sanitizeInput(title);
    const bookAuthor = sanitizeInput(author);
    const bookGenre = sanitizeInput(genre);

    await addBookToFirestore(bookTitle, bookAuthor, bookGenre);
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookGenreInput.value = "";
    renderBooks();
  } else {
    alert("Please fill out all fields!");
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
