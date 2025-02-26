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
import { GoogleGenerativeAI } from "@google/generative-ai";

//Variables
const bookTitleInput = document.getElementById("bookTitleInput");
const bookAuthorInput = document.getElementById("bookAuthorInput");
const bookGenreInput = document.getElementById("bookGenreInput");
const addBookBtn = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");

const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");

var apiKey;
var genAI;
var model;

//Chatbot memory variables
let pendingBookTitle = "";
let pendingBookAuthor = "";
let pendingBookGenre = "";
let pendingBookRating = "";

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
  return book;
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

//Formatting helper functions
function capitalizeWords(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

//Chatbot
async function getApiKey() {
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey = snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

function appendMessage(message) {
  let history = document.createElement("div");
  history.textContent = message;
  history.className = "history";
  chatHistory.appendChild(history);
  aiInput.value = "";
}

function getGenreKey(genreString) {
  let genreKey = "";
  Object.entries(genreMap).forEach(([key, value]) => {
    if (value.toLowerCase() === genreString.toLowerCase().trim()) {
      genreKey = key;
    }
  });
  return genreMap[genreKey] ? genreKey : false;
}

function ruleChatBot(request) {
  const trimmedRequest = request.trim();
  const lowerRequest = trimmedRequest.toLowerCase();

  // Waiting for an author: title is set but author is missing.
  if (pendingBookTitle && !pendingBookAuthor) {
    pendingBookAuthor = capitalizeWords(trimmedRequest);
    appendMessage(`What's the genre for "${pendingBookTitle}"?`);
    return true;
  }

  // Waiting for a genre: title and author are set but genre is missing.
  if (pendingBookTitle && pendingBookAuthor && !pendingBookGenre) {
    let genreKey = getGenreKey(trimmedRequest);
    if (genreKey) {
      pendingBookGenre = genreKey;
      addBook(pendingBookTitle, pendingBookAuthor, pendingBookGenre);
      appendMessage(
        `Added "${pendingBookTitle}" by ${pendingBookAuthor} under the ${pendingBookGenre} genre.`
      );
      // Reset pending state.
      pendingBookTitle = "";
      pendingBookAuthor = "";
      pendingBookGenre = "";
    } else {
      appendMessage(
        "Sorry, we don't have that genre in our library. Please choose from: " +
          Object.values(genreMap).join(", ")
      );
    }
    return true;
  }

  // ----- Parsing a new full command -----
  // If the command starts with an add phrase but lacks author indicators
  if (
    (lowerRequest.startsWith("add") ||
      lowerRequest.startsWith("i want to add") ||
      lowerRequest.startsWith("can you add") ||
      lowerRequest.startsWith("the title is")) &&
    !lowerRequest.includes("by") &&
    !lowerRequest.includes("the author is")
  ) {
    let titleOnlyMatch = trimmedRequest.match(
      /^(?:i want to add|add|can you add|the title is)(?: the book| book)?\s*"?([^"]+?)"?\s*$/
    );
    if (titleOnlyMatch) {
      pendingBookTitle = capitalizeWords(titleOnlyMatch[1].trim());
      appendMessage(`Who is the author of "${pendingBookTitle}"?`);
      return true;
    }
  }

  // Otherwise, try to parse a full command with title, author, and optionally genre.
  const titleRegex =
    /(?:i want to add|add|can you add|the title is)(?: the book| book)?\s*"?([^"]+?)"?\s*(?=by|the author is)/i;
  const authorRegex =
    /(?:by|the author is)\s*([^"]+?)(?=$|\s+(?:the genre is|it's a|it is a|its a|this falls under))/i;
  const genreRegex =
    /(?:the genre is|it's a|it is a|its a|this falls under)\s*"?([^"]+?)"?\s*$/i;

  let titleMatch = trimmedRequest.match(titleRegex);
  let authorMatch = trimmedRequest.match(authorRegex);
  let genreMatch = trimmedRequest.match(genreRegex);

  if (titleMatch) {
    pendingBookTitle = capitalizeWords(titleMatch[1].trim());
  }
  if (authorMatch) {
    pendingBookAuthor = capitalizeWords(authorMatch[1].trim());
  }
  if (genreMatch) {
    let extractedGenre = genreMatch[1].trim();
    pendingBookGenre = getGenreKey(extractedGenre);
  }

  if (pendingBookTitle) {
    if (!pendingBookAuthor) {
      appendMessage(`Who is the author of "${pendingBookTitle}"?`);
    } else if (!pendingBookGenre) {
      appendMessage(`What's the genre for "${pendingBookTitle}"?`);
    } else {
      addBook(pendingBookTitle, pendingBookAuthor, pendingBookGenre);
      appendMessage(
        `Added "${pendingBookTitle}" by ${pendingBookAuthor} under the ${pendingBookGenre} genre.`
      );
      // Reset pending values.
      pendingBookTitle = "";
      pendingBookAuthor = "";
      pendingBookGenre = "";
    }
    return true;
  }

  // Rate book (only if not already rated)
  let rateMatch = normalized.match(
    /(?:rate|i want to rate) "?([^\"]+)"? (?:a )?(\d)\/5/i
  );
  if (rateMatch) {
    pendingBookTitle = capitalizeWords(rateMatch[1].trim());
    pendingBookRating = parseInt(rateMatch[2]);

    if (pendingBookRating >= 1 && pendingBookRating <= 5) {
      let found = false;
      document.querySelectorAll(".book").forEach((book) => {
        let titleElement = book.querySelector(".book-title");
        if (
          titleElement &&
          titleElement.textContent.toLowerCase() ===
            pendingBookTitle.toLowerCase()
        ) {
          let ratingElement = book.querySelector(".read");
          if (ratingElement) {
            appendMessage(
              `"${pendingBookTitle}" is already read and rated, and it cannot be changed. Please remove the book first, and then add it again it ro re-rate it.`
            );
          } else {
            let bookId = book.id;
            updateBookRating(bookId, pendingBookRating);
            appendMessage(
              `Rated "${pendingBookTitle}" as ${pendingBookRating}/5.`
            );
            renderBooks();
            pendingBookRating = "";
            pendingBookTitle = "";
          }
          found = true;
        }
      });
      if (!found)
        appendMessage(
          `You haven't added "${pendingBookTitle}" to your bookshelf yet.`
        );
    } else {
      appendMessage("Ratings must be whole numbers between 1 and 5.");
    }
    return true;
  }

  // Remove book
  let removeMatch = normalized.match(
    /(?:i want to|remove|delete) (?:the )?book "?([^\"]+)"?/i
  );
  if (removeMatch) {
    pendingBookTitle = capitalizeWords(removeMatch[1].trim());

    if (pendingBookTitle) {
      let found = false;
      document.querySelectorAll(".book").forEach((book) => {
        let titleElement = book.querySelector(".book-title");
        if (
          titleElement &&
          titleElement.textContent.toLowerCase() ===
            pendingBookTitle.toLowerCase()
        ) {
          let bookId = book.id;
          removeBook(bookId);
          removeVisualBook(bookId);
          appendMessage(`Removed "${pendingBookTitle}" from the list.`);
          found = true;
          pendingBookTitle = "";
        }
      });
      if (!found)
        appendMessage(`The book, "${pendingBookTitle}", was not found.`);
    } else {
      appendMessage("Please specify a book title to remove.");
    }
    return true;
  }

  return false;
}

async function askChatBot(request) {
  let result = await model.generateContent(request);
  appendMessage(result.response.text());
}

//Render books
async function renderBooks() {
  const books = await getBooksFromFirestore();
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
  bookItem.innerHTML = `
    <div class="book-header">
      <h3 class="book-title">${bookObject.title}</h3>
      <p class="book-author">By: ${bookObject.author}</p>
    </div>
    <p class="book-genre"> Genre: ${genreMap[bookObject.genre] || "Unknown"}</p>
    <div class="book-rating"> ${
      bookObject.read
        ? `<p class="read">Rating: ${bookObject.rating}/5</p>`
        : `<label class="not-read" for="input-${bookId}">Submit a Rating When Read</label>
        <div class="book-rating-input">
          <input name="input-${bookId}" type="number" min="1" max="5" placeholder="1-5" id="rate-${bookId}" />
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
      removeBook(bookId);
      removeVisualBook(bookId);
    }
  });
}

// Add books on page load
window.addEventListener("load", () => {
  getApiKey();
  renderBooks();
});

addBookBtn.addEventListener("click", async () => {
  const title = bookTitleInput.value.trim();
  const author = bookAuthorInput.value.trim();
  const genre = bookGenreInput.value.trim();

  if (title && author && genre) {
    const bookTitle = sanitizeInput(title);
    const bookAuthor = sanitizeInput(author);
    const bookGenre = sanitizeInput(genre);

    await addBook(bookTitle, bookAuthor, bookGenre);

    bookAuthorInput.value = "";
    bookGenreInput.value = "";
    bookTitleInput.value = "";
  } else {
    alert("Please fill out all fields!");
  }
});

aiButton.addEventListener("click", async () => {
  let prompt = aiInput.value.trim().toLowerCase();
  if (prompt) {
    if (!ruleChatBot(prompt)) {
      askChatBot(prompt);
    }
  } else {
    appendMessage("Please ask a question.");
  }
});

aiInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    aiButton.click();
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
