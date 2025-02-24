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
const bookInput = document.getElementById("bookInput");
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
async function addBookToFirestore(bookTitle) {
  await addDoc(collection(db, "books"), {
    title: bookTitle,
    read: false,
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
    const bookItem = document.createElement("li");
    bookItem.id = book.id;
    bookItem.textContent = book.data().title;
    bookItem.tabIndex = 0;
    bookList.appendChild(bookItem);
  });
}

//Add book
addBookBtn.addEventListener("click", async () => {
  const book = bookInput.value.trim();
  if (book) {
    const bookTitle = sanitizeInput(bookInput.value.trim());

    if (bookTitle) {
      await addBookToFirestore(bookTitle);
      renderBooks();
      bookInput.value = "";
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
