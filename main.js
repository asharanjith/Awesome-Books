const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('#bookList');

const bookList = [];

  
function savetoLocalStorage() {
    const bookData = {
        name: bookName.value,
        author: bookAuthor.value,
    };

    bookList.push(bookData);

    localStorage.setItem('bookData', JSON.stringify(bookList));

    console.log(bookList)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    savetoLocalStorage();
    form.reset();
  });

  bookList.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `<p>${book.name}</p>
    <p>${book.author}</p>
    <button class="removeBook">Remove</button>
    <hr>
    `;
    bookDisplay.appendChild(bookDiv);
    });



