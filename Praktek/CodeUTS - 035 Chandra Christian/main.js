let line = document.querySelector(".line");
let navLink = document.getElementById("nav-links");
let links = document.querySelectorAll(".links");

line.addEventListener("click", () => {
  navLink.classList.toggle("hide");
  line.classList.toggle("lines-rotate");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navLink.classList.toggle("hide");
  });
}

var now = new Date();
console.log("Current Time is: " + now);

// getFullYear function will give current year
var currentYear = now.getFullYear();
console.log("Current year is: " + currentYear);

// getYear will give you the years after 1990 i.e currentYear-1990
var year = now.getYear();
console.log("Current year is: " + year);

// getMonth gives the month value but months starts from 0
// add 1 to get actual month value
var month = now.getMonth() + 1;
console.log("Current month is: " + month);

// getDate gives the date value
var day = now.getDate();
console.log("Today's day is: " + day);
