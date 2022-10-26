const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookContainer = document.querySelector('.book-container');
const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

const bookForm = document.querySelector('#bookForm');
const bookSection = document.querySelector('#bookList');
const contactSection = document.querySelector('#contactDetails');

const listBtn = document.getElementById('listBtn');
const formBtn = document.querySelector('#addBtn');
const contactBtn = document.getElementById('contactBtn');

const message = document.querySelector('.message');

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  displayBook() {
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
  }

  addBook() {
    bookList.push(this);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  deleteBook= (name) => {
    const removeItem = bookList.filter((item) => item.name !== name);
    localStorage.setItem('bookList', JSON.stringify(removeItem));
    window.location.reload();
  }
}

function redirect() {
  bookSection.classList.remove('hide')
  listArr.forEach(item => {
    item.classList.add('hide');
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = '';
  const book = new Book(bookName.value, bookAuthor.value);
  book.addBook();
  book.displayBook();
  form.reset();
  redirect();
});

bookList.forEach((book) => {
  const bookObj = new Book(book.name, book.author);
  bookObj.displayBook();
});

if(!bookList.length) {
  message.innerHTML = 'click Add new link to add a new book';
}

const listArr = [bookForm, contactSection];
const formArr = [bookSection, contactSection];
const contactArr = [bookForm, bookSection]

listBtn.addEventListener('click', () => {
  listBtn.style.color = '#e90074';
  formBtn.style.color = '#555';
  contactBtn.style.color = '#555';
  bookSection.classList.remove('hide');
  listArr.forEach(item => {
    item.classList.add('hide');
  })
})

  formBtn.addEventListener('click', () => {  
  listBtn.style.color = '#555';
  formBtn.style.color = '#e90074';
  contactBtn.style.color = '#555';
    bookForm.classList.remove('hide');
    formArr.forEach(item => {
      item.classList.add('hide');
    })
  })

contactBtn.addEventListener('click', () => {
  listBtn.style.color = '#555';
  formBtn.style.color = '#555';
  contactBtn.style.color = '#e90074';
  contactSection.classList.remove('hide');
  contactArr.forEach(item => {
    item.classList.add('hide');
  })
})

const initial = () => {
  bookSection.classList.remove('hide')
  listArr.forEach(item => {
    item.classList.add('hide');
  })
}

window.onload = initial()

const clock = document.querySelector('.clock');

const time = () => {

    const now = new Date();

    const months = ['January', 'February', 'March',' April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const year = now.getFullYear()
    const month = now.getMonth();
    const day = now.getDate();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span class="month">${months[month]}, </span>
    <span class="day">${day},</span>
    <span class="year">${year}, </span>
    <ul>
        <li class="hour">${h}:</li>
        <li class="minutes">${m}:</li>
        <li class="seconds">${s}</li>
    </ul>
    `;
        clock.innerHTML = html;
    }

setInterval(time, 1000);
