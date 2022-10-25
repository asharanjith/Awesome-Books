const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('#bookList');
var bookList = [];
const storedBooks = JSON.parse(localStorage.getItem('bookData'));
const deleteBook = document.querySelectorAll('.removeBook')

const displayBook = (bookItem) => {
  const newBook = document.createElement('div');
  newBook.classList.add('book');
  newBook.innerHTML = `<h3>${bookItem.bookTitle}</h3>
  <p>${bookItem.bookAuthor}</p>
  <button class="removeBook" id="${bookItem.bookTitle}">Remove</button>
<hr>`;
bookDisplay.appendChild(newBook)
};

if(storedBooks) {
  for(let item of storedBooks) {
    displayBook(item);
    bookList.push(item)
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


bookDisplay.addEventListener('click', (e) => {
  console.log(e.target.tagName)
  if(e.target.tagName == 'BUTTON') {
    let deleteItem = e.target.id;
    bookList = bookList.filter(book => book.bookTitle != deleteItem)
    localStorage.setItem('bookData', JSON.stringify(bookList))
    window.location.reload();
  }
})

