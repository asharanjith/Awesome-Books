const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('#bookList');
const bookList = [];
const storedBooks = JSON.parse(localStorage.getItem('bookData'));
const deleteBook = document.querySelectorAll('.removeBook')

const displayBook = (bookItem) => {
  const newBook = document.createElement('div');
  newBook.classList.add('book');
  newBook.innerHTML = `<h3>${bookItem.bookTitle}</h3>
  <p>${bookItem.bookAuthor}</p>
  <button class="removeBook" id="bookItem.bookTitle">Remove</button>
<hr>`;
bookDisplay.appendChild(newBook);
};

if(storedBooks) {
  for(let item of storedBooks) {
    displayBook(item);
  }
};

function saveToLocalStorage() {
  const book = {
    bookTitle: bookName.value,
    bookAuthor: bookAuthor.value
  };
  bookList.push(book);
  displayBook(book);
  localStorage.setItem('bookData', JSON.stringify(bookList));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveToLocalStorage();
  form.reset();
})

// const removeBook = () => {

// };

// deleteBook.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     const item = e.target.id;
//     console.log(item);
//   })
// })

