const bookCollection = document.querySelector(".bookCollection");

let titleName = document.querySelector("#title");
let authorName = document.querySelector("#author");
let pagesNum = document.querySelector("#pages");
let readStatus = document.querySelector("#readOrNot");

let addBookButton = document.querySelector("#addBookButton");
let pushBookButton = document.querySelector("#pushBookButton");


const myLibrary = [ /*... */];

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
  readStatus.checked = false;
}

addBookButton.addEventListener("click", (event)=>{
  event.preventDefault();
  
  let readShow;
  if(readStatus.checked){
    readShow = "Read";
  }else{ readShow = "Not read";}
  
  let addId = myLibrary.length;

  if (titleName.value.trim() === ''||authorName.value.trim() === ''||pagesNum.value.trim() === ''||readStatus.value.trim() === '') {
    alert('Please fill out the input field!');
    return;
  }

  let newBook = new addBookToLibrary(addId,`${titleName.value}`,`${authorName.value}`,`${pagesNum.value}`,`${readShow}`);

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
    readStatusPush.classList.add("readCondition");

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

    readStatusPush.addEventListener("click", ()=>{
      if(myLibrary[i].id===i){
        if(readStatusPush.textContent == "Read"){
          readStatusPush.textContent = "Not read";
        }else if (readStatusPush.textContent == "Not read") {
          readStatusPush.textContent = "Read";
        }
      }
    });
  }
});


