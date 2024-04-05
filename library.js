const myLibrary = [];


let newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', function() {
    let newForm = document.querySelector('#newForm');
    newForm.style.display = 'block';
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.classList.add('card');
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h4 class="auther">by ${book.author}</h4>
            </div>
            <div class="card-body">
                <p class="pages">${book.pages}</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="btn btn-danger" onclick="removeBook(${i})">Remove</button>
                <button class="btn btn-primary" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
    return (newBook);
}

document.querySelector('#newForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
})