const arr = [
  {
    date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021 ",
    Venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    Venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function createTh(title, styleName, responsiveStyle) {
  let thEl = document.createElement("th");
  thEl.innerText = title;
  thEl.classList.add(styleName);
  thEl.classList.add(responsiveStyle);
  return thEl;
}

function createTd(content, styleName) {
  let tdEl = document.createElement("td");
  tdEl.innerText = content;
  tdEl.classList.add(styleName);
  return tdEl;
}

function createButtonTd() {
  let tdEl = document.createElement("td");
  tdEl.classList.add("shows__table-content");
  let buttonEl = document.createElement("button");
  buttonEl.innerText = "Buy tickets";
  tdEl.appendChild(buttonEl);
  return tdEl;
}

function buildTable() {
  let tableEl = document.querySelector("table");
  for (let i = 0; i < arr.length; i++) {
    let trEl = document.createElement("tr");
    let date = arr[i].date;
    let Venue = arr[i].Venue;
    let location = arr[i].location;
    trEl.appendChild(
      createTh("Date", "shows__table-title-date", "switch-style")
    );
    trEl.appendChild(createTd(date, "shows__table-date"));
    trEl.appendChild(
      createTh("Venue", "shows__table-title-content", "switch-style")
    );
    trEl.appendChild(createTd(Venue, "shows__table-content"));
    trEl.appendChild(
      createTh("Location", "shows__table-title-content", "switch-style")
    );
    trEl.appendChild(createTd(location, "shows__table-content"));
    trEl.appendChild(createButtonTd());
    tableEl.appendChild(trEl);
  }
}

function addTrClickEvent() {
  let trElList = document.querySelectorAll("tr");

  for (let i = 0; i < trElList.length; i++) {
    trElList[i].addEventListener("click", (e) => {
      trElList.forEach((element) => {
        element.classList.remove("table-row--selected");
      });
      e.currentTarget.classList.add("table-row--selected");
      console.log(e.currentTarget);
    });
  }
}

buildTable();
addTrClickEvent();
