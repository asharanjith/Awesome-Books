const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('#bookList');


//when the page loads
//check for data in the local storage

const populateUI = (bookData) => {
  const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `<p>${bookData.name}</p>
    <p>${bookData.author}</p>
    <button class="removeBook">Remove</button>
    <hr>
    `;
    bookDisplay.appendChild(bookDiv);
}


const displayBooks = JSON.parse(localStorage.getItem('bookData'));

if(displayBooks) {
  displayBooks.forEach(bookItem => {
    populateUI(bookItem)
  });
}

function savetoLocalStorage() {
    // bookList = JSON.parse(localStorage.getItem('bookData'));
      const name = bookName.value.trim();
      const author =  bookAuthor.value.trim();
    
      const bookList = [];
      // save to local storage
      const bookData = {
        name: name,
        author: author
      }
    bookList.push(bookData);
    localStorage.setItem('bookData', JSON.stringify(bookList));

    bookList.forEach(book => {
      populateUI(book);
    })
}
console.log(bookList)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    savetoLocalStorage();
    form.reset();
  });



