let show=document.getElementById("show");
let container=document.getElementById("container");
let title=document.getElementById("title");
let author=document.getElementById("author");
let pages=document.getElementById("pages");
let add=document.getElementById("add");
let table=document.getElementById("result");
let list=document.getElementById("list");
let bookStatus=document.getElementById("bookStatus");
const myLibrary=[];

function Book(title,author,pages,bookStatus){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.bookStatus=bookStatus;
}

function addBookToLibrary(newBook){
    let tr=document.createElement("tr");
    for(let key in newBook){
        let first=newBook[key];
        let td=document.createElement("td");
        td.textContent=first;
        tr.append(td);
    }
    let btn=document.createElement("button");
    btn.textContent="x";
    btn.setAttribute("id","dlt");
    tr.append(btn);
    list.append(tr);
    btn.addEventListener("click",()=>{
        list.removeChild(tr);
     });
}

add.addEventListener("click",()=>{
    let newBook=new Book(title.value,author.value,pages.value,bookStatus.value);
    if(title.value!="" && author.value!="" && pages.value!=""){
    myLibrary.push(newBook);
    addBookToLibrary(newBook);
    }
    else{
      alert("Enter all the fields of input");
    }
})

show.addEventListener("click",()=>{
  if(show.textContent!="Hide Form"){
    container.style.display="flex";
    show.textContent="Hide Form";
  }
  else{
    container.style.display="none";
    show.textContent="Add New Book";
  }
});

