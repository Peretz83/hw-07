let list = [];

// first input
function addBook(){
  let newBook = document.querySelector("#item");
  let val = newBook.value;
  console.log(val);
  list.push(val);
  newBook.value = "";
}
// second input
function mustReadBook(){
  let mustRead = document.querySelector("#mustRead");
  let vipBook = document.querySelector ("#mustRead").value;
  console.log(vipBook);
  list.unshift(vipBook);
  mustRead.value = "";
  }

  // this is the strike through function
function mark(listItem){
listItem.style.textDecoration = "line-through"
}

// opening ul/li
function disList(){
  let disElem = document.querySelectorAll(".disp");
  disElem[0].innerHTML = "<ul>"

  for(let book of list){
    disElem[0].innerHTML +=
    '<li '+ book + '" onclick ="mark('+book+')">'+book+"</li>";

  }
  disElem[0].innerHTML +="</ul>";
}




