// book object
function book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.name} + ${this.author}`
    }
}

let knygos = []

// adds an item
function addItem() {
    var ul = document.getElementById('dynamic-list');

    // gets all the form answers
    var name = document.getElementById('name');
    var author = document.getElementById('author');
    var page = document.getElementById('page');
    var read = document.getElementById('read');

    var li = document.createElement('li');

    // creates an object knyga
    const knyga1 = new book(name.value, author.value, page.value, read.value);

    li.setAttribute('id', name.value); // kad galetume istrint pagal pavadinima
    li.setAttribute('class', 'item');

    knygos.push(knyga1);

    // not the optimal way of doing it but I wanted to see how to create and add seperate elements 
    var liname = document.createElement('li-name');
    liname.setAttribute('id', name.value);
    liname.appendChild(document.createTextNode(`knygos pavadinimas ${name.value}`));
    var liauthor = document.createElement('li-author');
    liauthor.setAttribute('id', author.value)
    liauthor.appendChild(document.createTextNode(` knygos autorius: ${author.value}`));
    var lipage = document.createElement('li-page');
    lipage.setAttribute('id', page.value)
    lipage.appendChild(document.createTextNode(` knygos puslapiai: ${page.value}`));
    var liread = document.createElement('li-read');
    liread.setAttribute('id', read.value)
    liread.appendChild(document.createTextNode(` ar perskaityta: ${read.value}`));

    // append the seperate elements
    li.appendChild(liname)
    li.appendChild(liauthor)
    li.appendChild(lipage)
    li.appendChild(liread)
    ul.appendChild(li)
}

// deletes an item
function removeItem() {
    var ul = document.getElementById('dynamic-list');
    var name = document.getElementById('name');
    var item = document.getElementById(name.value);
    ul.removeChild(item);
}

// selects modals,buttons,overlays. [] because those are types
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// this functionality is created in a way where i can add more modals, thus the "forEach" part
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

// makes it so that if you click outside the modal, the modal gets closed
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

// close modal button inside the modal
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal') // returns closet parent which is named "modaL"
    closeModal(modal)
  })
})

// open modal button
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

// close modal button
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
  