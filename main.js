const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('.book');
const bookList = JSON.parse(localStorage.getItem('bookList')) || [];


// class Display {
//   constructor(name, author){
//     this.name = name;
//     this.author = author;
//   }

  
// }

class Book {
  constructor(name, author){
    this.name = name;
    this.author = author;
  }
  displayBook (){
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.innerHTML = `<h3>${this.name}</h3>
    <p>${this.author}</p>
    <button class="removeBook" id="${this.name}">Remove</button>
  <hr>`;
  bookDisplay.appendChild(newBook)
  };

  addBook() {    
    bookList.push(this);    
    localStorage.setItem('bookList', JSON.stringify(bookList));    
  }

  deleteBook(e) {
    if(e.target.tagName == 'BUTTON') {
      let deleteItem = e.target.id;
      bookList = bookList.filter(book => book.bookTitle != deleteItem)
      localStorage.setItem('bookData', JSON.stringify(bookList))
      window.location.reload();
    }
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(bookName.value, bookAuthor.value);
  book.addBook();
  book.displayBook();
  // form.reset;
});
bookList.forEach(book => {
  const bookObj = new Book(book.name, book.author);
  bookObj.displayBook();
});


// bookDisplay.addEventListener('click', deleteBook);



// function displayBook() {
//   bookDisplay.innerHTML = bookList.map((book, i) => `
//             <li>
//                 <p class="bookName">${book.name}</p>
//                 <p class="bookAuthor">${book.author}</p> 
//                 <button data-index=${i}>Remove</button>
//                 <hr>
//             </li>   
//         `).join('');
// }

// function addBook(e) {
//   e.preventDefault();
//   const name = bookName.value;
//   const author = bookAuthor.value;
//   const book = { name, author };
//   bookList.push(book);
//   displayBook();
//   localStorage.setItem('bookList', JSON.stringify(bookList));
//   this.reset();
// }

// function deleteBook(e) {
//   if (!e.target.matches('button')) return;
//   const { index } = e.target.dataset;
//   bookList.splice(index, 1);
//   displayBook();
//   localStorage.setItem('bookList', JSON.stringify(bookList));
// }

