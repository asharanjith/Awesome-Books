const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');

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
  });

