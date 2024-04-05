const myLibrary = [];

function showForm() {
    const form = document.getElementById('newForm');
    form.style.display = (form.style.display === 'none') ? 'block' : 'none';
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(event) {
    event.preventDefault(); // Prevent form submission

    const currentTitle = document.getElementById('title').value;
    const currentAuthor = document.getElementById('author').value;
    const currentPages = document.getElementById('pages').value;
    const currentRead = document.getElementById('read').checked;

    const newBook = new Book(currentTitle, currentAuthor, currentPages, currentRead);
    myLibrary.push(newBook);

    displayBooks();
}

function displayBooks() {
    const booksContainer = document.querySelector('.books');
    booksContainer.innerHTML = ''; // Clear previous content

    myLibrary.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-item');
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        `;
        booksContainer.appendChild(bookElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const addBookButton = document.getElementById('subBtn');
    addBookButton.addEventListener('click', addBookToLibrary);

    const newBookForm = document.getElementById('newForm');
    newBookForm.addEventListener('submit', addBookToLibrary);

    const newBookBtn = document.getElementById('newBtn');
    newBookBtn.addEventListener('click', showForm);
});