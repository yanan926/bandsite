let commentsList = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

function createCommentElement(elementType, text, className) {
  const commentEl = document.createElement(elementType);
  commentEl.classList.add(className);
  commentEl.innerText = text;
  return commentEl;
}

const ulEl = document.querySelector(".comments");
function displayCommentList() {
  ulEl.textContent = "";
  for (let i = 0; i < commentsList.length; i++) {
    let name = commentsList[i].name;
    let date = commentsList[i].date;
    let comment = commentsList[i].comment;
    let containerEl = document.createElement("li");
    containerEl.classList.add("comments__container");
    let inputContainerEl = document.createElement("div");
    inputContainerEl.classList.add("comments__input-container");
    let nameDateContainerEl = document.createElement("div");
    let logoEl = document.createElement("div");
    nameDateContainerEl.classList.add("comments__name-date-container");
    logoEl.classList.add("comments__logo");
    const commentNameEl = createCommentElement("h4", name, "comments__name");
    const commentDateEl = createCommentElement("h4", date, "comments__date");
    nameDateContainerEl.appendChild(commentNameEl);
    nameDateContainerEl.appendChild(commentDateEl);
    const commentTextEl = createCommentElement(
      "p",
      comment,
      "comments__content"
    );
    inputContainerEl.appendChild(nameDateContainerEl);
    inputContainerEl.appendChild(commentTextEl);
    containerEl.appendChild(logoEl);
    containerEl.appendChild(inputContainerEl);
    ulEl.appendChild(containerEl);
  }
}

displayCommentList()

let formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
    date: new Date().toDateString(),
  };
  commentsList.unshift(newComment);
  displayCommentList();
  formEl.reset();
});

