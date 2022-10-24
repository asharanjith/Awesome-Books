const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('.book');
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];

function displayBook() {
    bookDisplay.innerHTML = bookList.map((book, i) => {
        return `
            <li>
                <span class="bookName">${book.name}</span>
                <span class="bookAuthor">${book.author}</span> 
                <button data-index=${i}>Remove</button>
            </li>
        `;
    }).join('');
}
  
function addBook(e) {
    e.preventDefault();
    const name = bookName.value;
    const author = bookAuthor.value;
    const book = { name, author };
    bookList.push(book);
    displayBook();
    localStorage.setItem('bookList', JSON.stringify(bookList));
    this.reset();
}

function deleteBook(e) {
    if (!e.target.matches('button')) return;
    const index = e.target.dataset.index;
    bookList.splice(index, 1);
    displayBook();
    localStorage.setItem('bookList', JSON.stringify(bookList));
}

form.addEventListener('submit', addBook);
bookDisplay.addEventListener('click', deleteBook);
displayBook();

