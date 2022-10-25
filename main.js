const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookContainer = document.querySelector('.book-container');
const bookList = JSON.parse(localStorage.getItem('bookList')) || [];


class Book {
  constructor(name, author){
    this.name = name;
    this.author = author;
  }

  displayBook (){
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.innerHTML = `<p>"${this.name}" by ${this.author}</p>
    `;  
    const deleteBook = document.createElement('button');
    deleteBook.classList.add('delete');
    deleteBook.textContent = 'Remove';
    deleteBook.addEventListener('click', () => {
      this.deleteBook(this.name);
    });
    newBook.appendChild(deleteBook); 
    bookContainer.appendChild(newBook);

  };

  addBook() {    
    bookList.push(this);    
    localStorage.setItem('bookList', JSON.stringify(bookList));    
  }

  deleteBook(name) {
    const removeItem = bookList.filter((item) => {
      return item.name !== name;
    });
    localStorage.setItem('bookList', JSON.stringify(removeItem));
    location.reload();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(bookName.value, bookAuthor.value);
  book.addBook();
  book.displayBook();  
  form.reset();
});

bookList.forEach(book => {
  const bookObj = new Book(book.name, book.author);
  bookObj.displayBook();
});
