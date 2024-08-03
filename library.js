const bookCollection = document.querySelector(".bookCollection");

let titleName = document.querySelector("#title");
let authorName = document.querySelector("#author");
let pagesNum = document.querySelector("#pages");
let readStatus = document.querySelector("#readOrNot");

let addBookButton = document.querySelector("#addBookButton");
let pushBookButton = document.querySelector("#pushBookButton");

const myLibrary = [      
  {
    title: 'Harry Porter',
    author: 'J.K Rowley',
    pages: 423,
    readOrNot: 'not read yet'
  },
  {
    title: 'The All Father',
    author: 'Odin',
    pages: 1345,
    readOrNot: 'read'
  }];

function Book(title,author,pages,readOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(title,author,pages,readOrNot) {
  Book.call(this,title,author,pages,readOrNot);
}

Object.setPrototypeOf(addBookToLibrary.prototype, Book.prototype);

addBookToLibrary.prototype.info = function () {
  myLibrary.push({title:this.title,author:this.author,pages:this.pages,readOrNot:this.readOrNot});
};

addBookButton.addEventListener("click", ()=>{
  let newBook = new addBookToLibrary(`${titleName.value}`,`${authorName.value}`,`${pagesNum.value}`,`${readStatus.value}`);
  newBook.info();
});

/*function pushToDisplay(){
  
}
*/
pushBookButton.addEventListener("click", ()=>{
  for(let i=0;i<myLibrary.length;i++){
    let bookCard = document.createElement("div");
    bookCard.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, I have ${myLibrary[i].readOrNot}`;
    bookCollection.appendChild(bookCard);
  }
});


