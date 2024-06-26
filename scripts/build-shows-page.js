import BandSiteApi from "./bandSiteApi.js";

//function used to get the shows from api and convert the timestamp attribute to a string to display date
async function fetchShows() {
  const api = "c94e5d12-3048-42b5-8ccb-c0f67f3faeb0";
  const bandSiteApi = new BandSiteApi(api);
  const showsList = await bandSiteApi.getShows();
  showsList.forEach(show => show.date = new Date(show.date).toDateString())
  return showsList;
}

//function used to create th element with text and style
function createTh(title, styleName, responsiveStyle) {
  let thEl = document.createElement("th");
  thEl.innerText = title;
  thEl.classList.add(styleName);
  thEl.classList.add(responsiveStyle);
  return thEl;
}

//function used to create td element with text and style
function createTd(content, styleName) {
  let tdEl = document.createElement("td");
  tdEl.innerText = content;
  tdEl.classList.add(styleName);
  return tdEl;
}

//function used to create button element with text and style
function createButtonTd() {
  let tdEl = document.createElement("td");
  tdEl.classList.add("shows__table-content");
  let buttonEl = document.createElement("button");
  buttonEl.innerText = "Buy tickets";
  tdEl.appendChild(buttonEl);
  return tdEl;
}

//function to create the table
async function buildTable() {
  let tableEl = document.querySelector("table");
  //get the shows content from api
  let shows = await fetchShows()
  for (let i = 0; i < shows.length; i++) {
    let trEl = document.createElement("tr");
    let {date, place, location} = shows[i]
    trEl.appendChild(
      createTh("Date", "shows__table-title-date", "switch-style")
    );
    trEl.appendChild(createTd(date, "shows__table-date"));
    trEl.appendChild(
      createTh("place", "shows__table-title-content", "switch-style")
    );
    trEl.appendChild(createTd(place, "shows__table-content"));
    trEl.appendChild(
      createTh("Location", "shows__table-title-content", "switch-style")
    );
    trEl.appendChild(createTd(location, "shows__table-content"));
    trEl.appendChild(createButtonTd());
    tableEl.appendChild(trEl);
  }
}

//a funciton to make the row selected style
function addTrClickEvent() {
  let trElList = document.querySelectorAll("tr");

  for (let i = 0; i < trElList.length; i++) {
    trElList[i].addEventListener("click", (e) => {
      trElList.forEach((element) => {
        element.classList.remove("table-row--selected");
      });
      e.currentTarget.classList.add("table-row--selected");
    });
  }
}

await buildTable();
addTrClickEvent();
