// DOM Elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//Options
const showAmPm = true;

//Show Time
function showTime() {
  let today = new Date(); //gives current date and time
  (hour = today.getHours()), // 0-23hr
    (min = today.getMinutes()),
    (sec = today.getSeconds());

  //Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM"; // Tunary operator - 12hr format

  //12hr Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000); //1000 for milseconds
}

//Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : " ") + n;
}

//Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('../images/Morning.jpg')";
    document.body.style.backgroundSize = "100vh";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('../images/Afternoon.jpg')";
    document.body.style.backgroundSize = "100vh";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('../images/Evening.jpg')";
    document.body.style.backgroundSize = "100vh";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

//Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    // check to see if anything is in local storage
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Set Name
function setName(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed

    if ((e.which = 13 || e.keyCode == 13)) {
      // 13 is enter key
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    // blur
    localStorage.setItem("name", e.target.innerText);
  }
}

//Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    // check to see if anything is in local storage
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed

    if (e.which == 13 || e.keyCode == 13) {
      // 13 is enter key
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    // blur
    localStorage.setItem("focus", e.target.innerText);
  }
}

//Event Listeners

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();
