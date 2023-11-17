import BandSiteApi from "./bandSiteApi.js";

async function fetchComments() {
  const api = "c94e5d12-3048-42b5-8ccb-c0f67f3faeb0";
  const bandSiteApi = new BandSiteApi(api);
  const commentsList = await bandSiteApi.getComments();
  commentsList.forEach(
    (comment) => (comment.date = dateStringConvert(new Date(comment.timestamp)))
  );
  return commentsList;
}

let commentsList = await fetchComments();

const ulEl = document.querySelector(".comments");

//create a function to make create comment element easier
function createCommentElement(elementType, text, className) {
  const commentEl = document.createElement(elementType);
  commentEl.classList.add(className);
  commentEl.innerText = text;
  return commentEl;
}

//function to convert the date to a string in a correct format
function dateStringConvert(today = new Date()) {
  const yyyy = today.getFullYear();
  // Months start at 0!
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const formattedToday = mm + '/' + dd + '/' + yyyy;
  return formattedToday;
}

//a function used to render the array element as a li element
function displayCommentList() {
  //delete all elements in the old array

  ulEl.textContent = "";
  for (let i = 0; i < commentsList.length; i++) {
    let {name,date,comment,likes} = commentsList[i];
    console.log(`comment: ${comment}likes: ${likes}`)

    let buttonEl = document.createElement("button");
    buttonEl.classList.add("comments__like-button")
    buttonEl.type = "button"
    buttonEl.innerText = "Like";
    
    let containerEl = document.createElement("li");
    containerEl.classList.add("comments__container");
    let inputContainerEl = document.createElement("div");
    inputContainerEl.classList.add("comments__input-container");
    let nameDateContainerEl = document.createElement("div");
    let logoEl = document.createElement("div");
    nameDateContainerEl.classList.add("comments__name-date-container");
    logoEl.classList.add("comments__logo");
    const commentNameEl = createCommentElement("h4", name, "comments__name");
    const commentlikeEl = createCommentElement("span", ` ${likes} likes`, "comments__like");
    const commentDateEl = createCommentElement("h4", date, "comments__date");

    nameDateContainerEl.appendChild(commentNameEl)
    nameDateContainerEl.appendChild(commentDateEl)
    
    const commentTextEl = createCommentElement(
      "p",
      comment,
      "comments__content"
    );
    commentTextEl.appendChild(commentlikeEl)
    inputContainerEl.appendChild(nameDateContainerEl);
    inputContainerEl.appendChild(commentTextEl);
    inputContainerEl.appendChild(buttonEl)
    containerEl.appendChild(logoEl);
    containerEl.appendChild(inputContainerEl);
    ulEl.appendChild(containerEl);
  }
}

displayCommentList();

let formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
    date: dateStringConvert(),
  };
  //make the new array element as the first one in the array
  commentsList.unshift(newComment);
  const nameEl = document.querySelector("#name");
  const commentEl = document.querySelector("#comment");
  //remove the error state class
  commentEl.classList.remove("error-state");
  nameEl.classList.remove("error-state");

  // check if the name is more than one character and comment length is more 10 charactors
  if (event.target.name.value.length <= 1) {
    nameEl.classList.add("error-state");
    alert("please enter your full name");
    return;
  }
  if (event.target.comment.value.length < 10) {
    commentEl.classList.add("error-state");
    alert("plese make your comment longer");
    return;
  }
  displayCommentList();
  formEl.reset();
});
