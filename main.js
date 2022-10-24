const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookDisplay = document.querySelector('#bookList');

const bookList = [];

  
function savetoLocalStorage() {
    const bookList = JSON.parse(localStorage.getItem('bookData'));

    const bookData = {
        name: bookName.value,
        author: bookAuthor.value,
    };

    bookList.push(bookData);

    localStorage.setItem('bookData', JSON.stringify(bookList));

    console.log(bookData)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    savetoLocalStorage();
    form.reset();
  });

//   console.log(bookList);

//   document.addEventListener('DOMContentLoaded', () => {
    // const bookList = JSON.parse(localStorage.getItem('bookData'));
    // if (formDataInputs != null) {
    //   nameElement.value = formDataInputs.name;
    //   email.value = formDataInputs.email;
    //   msgElement.value = formDataInputs.message;
    // }
//   });

//   bookList.forEach((bookData) => {
    // const bookDiv = document.createElement('div');
    // bookDiv.classList.add('book');

    // bookDiv.innerHTML = `<p>${bookData.name}</p>
    // <p>${bookData.author}</p>
    // <button class="removeBook">Remove</button>
    // <hr>
    // `;
    // bookDisplay.appendChild(bookDiv);
    // console.log(bookData)
    // });

// for(let i = 0; i < bookData.length; i++){
//     console.log(bookList[i]);
// }

