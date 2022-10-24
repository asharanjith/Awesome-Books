const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('#bookList');
var bookList = [];


//when the page loads
//check for data in the local storage
const displayBooks = JSON.parse(localStorage.getItem('bookData'));
// bookList = savedData;
console.log(bookList)

if(bookList) {
  populateUI()
} else {
  
}
  
function savetoLocalStorage() {
    // bookList = JSON.parse(localStorage.getItem('bookData'));
      const name = bookName.value.trim();
      const author =  bookAuthor.value.trim();
    
      // save to local storage
      const bookData = {
        name: name,
        author: author
      }

    bookList.push(bookData);

    localStorage.setItem('bookData', JSON.stringify(bookList));

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    savetoLocalStorage();
    form.reset();
  });

//   console.log(bookList);

//   document.addEventListener('DOMContentLoaded', () => {
//     const bookListItems = JSON.parse(localStorage.getItem('bookData'));
//     if(bookListItems) {
//         bookListItems.forEach((bookData) => {
//             const bookDiv = document.createElement('div');
//             bookDiv.classList.add('book');
        
//             bookDiv.innerHTML = `<p>${bookData.name}</p>
//             <p>${bookData.author}</p>
//             <button class="removeBook">Remove</button>
//             <hr>
//             `;
//             bookDisplay.appendChild(bookDiv);
//             });
//     }
    
//   });


// for(let i = 0; i < bookData.length; i++){
//     console.log(bookList[i]);
// }

