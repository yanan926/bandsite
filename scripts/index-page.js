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

console.log('hello')
const commentEl = document.querySelector(".comments");

// for each comment object in  array, create comment el, append it to commentsEl
for (let i = 0; i < commentsList.length; i++) {
  const comment = commentsList[i];

  const commentEl = createcommentEl(comment.name, comment.date, comment.comment);

  // add each comment <li> to the comments <ul>
  commentsEl.appendChild(commentEl);
}


function createcommentEl(name, date, commentText) {
  const commentEl = document.createElement("li");
  commentEl.classList.add("comment");

  const nameEl = document.createElement("h3");
  nameEl.classList.add("comment__name");
  nameEl.innerText = name;

  const dateEl = document.createElement("span");
  dateEl.classList.add("comment__date");
  dateEl.innerText = date;

  const commentTextEl = document.createElement("p");
  commentText.classList.add("comment__text");
  commentText.innerText = commentText


  commentEl.appendChild(nameEl);
  commentEl.appendChild(dateEl);
  commentEl.appendChild(commentTextEl);

  return commentEl;
}
