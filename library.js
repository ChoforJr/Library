const bookCollection = document.querySelector(".bookCollection");

let titleName = document.querySelector("#title");
let authorName = document.querySelector("#author");
let pagesNum = document.querySelector("#pages");
let readStatus = document.querySelector("#readOrNot");

let addBookButton = document.querySelector("#addBookButton");
let pushBookButton = document.querySelector("#pushBookButton");


const myLibrary = [      
 /* {
    id:0,
    title: 'Harry Porter',
    author: 'J.K Rowley',
    pages: 423,
    readOrNot: 'not read yet'
  },
  {
    id:1,
    title: 'The All Father',
    author: 'Odin',
    pages: 1345,
    readOrNot: 'read'
  }*/];

function Book(id,title,author,pages,readOrNot) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(id,title,author,pages,readOrNot) {
  Book.call(this,id,title,author,pages,readOrNot);
}

Object.setPrototypeOf(addBookToLibrary.prototype, Book.prototype);

addBookToLibrary.prototype.info = function () {
  myLibrary.push({id:this.id,title:this.title,author:this.author,pages:this.pages,readOrNot:this.readOrNot});
};

function clearInput(){
  titleName.value = '';
  authorName.value = '';
  pagesNum.value = '';
  readStatus.value = '';
}

addBookButton.addEventListener("click", ()=>{
  let addId = myLibrary.length;
  let newBook = new addBookToLibrary(addId,`${titleName.value}`,`${authorName.value}`,`${pagesNum.value}`,`${readStatus.value}`);
  newBook.info();
  clearInput();
});

pushBookButton.addEventListener("click", ()=>{
  for(let i=0;i<myLibrary.length;i++){
    let bookCard = document.createElement("div");
    let titlePush = document.createElement("h2");
    let authorPush = document.createElement("p");
    let pagesPush = document.createElement("p");

    let readStatusPush = document.createElement("button");
    readStatusPush.classList.add("readCondition")

    let removeButtonPush = document.createElement("button");
    removeButtonPush.classList.add("remove");
    removeButtonPush.setAttribute('id',i);

    titlePush.textContent = `${myLibrary[i].title}`;
    authorPush.textContent = `by ${myLibrary[i].author}`;
    pagesPush.textContent = `${myLibrary[i].pages} pages`;
    readStatusPush.textContent = `${myLibrary[i].readOrNot}`;
    removeButtonPush.textContent = `Remove`;

    bookCard.appendChild(titlePush);
    bookCard.appendChild(authorPush);
    bookCard.appendChild(pagesPush);
    bookCard.appendChild(readStatusPush);
    bookCard.appendChild(removeButtonPush);

    bookCollection.appendChild(bookCard);

    removeButtonPush.addEventListener("click", ()=>{
      if(myLibrary[i].id===i){
        delete myLibrary[i]; 
        bookCollection.removeChild(bookCard);
        //myLibrary.splice(i,1);
        //console.log(myLibrary[i]);
      }
    });
  }
});


