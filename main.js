const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('#bookList');
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
  
function savetoLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(bookList));
    let bookData = {
        name: bookName.value,
        author: bookAuthor.value,
    };
    bookList.push(bookData);
    localStorage.setItem('bookData', JSON.stringify(bookList));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    savetoLocalStorage();
    form.reset();
  });

  document.addEventListener('DOMContentLoaded', () => {
    let bookListItems = JSON.parse(localStorage.getItem('bookData'));
    if(bookListItems) {
        bookListItems.forEach((bookData) => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
        
            bookDiv.innerHTML = `<p>${bookData.name}</p>
            <p>${bookData.author}</p>
            <button class="removeBook">Remove</button>
            <hr>
            `;
            bookDisplay.appendChild(bookDiv);
            });
    }
    
  });

    bookDisplay.addEventListener('click', (e) => {
        if(e.target.classList.contains('removeBook')) {
            e.target.parentElement.remove();
            // localStorage.removeItem('bookData');       
        }
    });
