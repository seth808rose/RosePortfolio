const navbar = document.querySelector(".nav");
const toggleBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// fixed navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// toggle button
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// close button
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
