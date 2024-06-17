// Toggle menu on small screens

function toggleMenu() {
  let menu = document.querySelector(".menu-container");
  menu.classList.toggle("visible");
}

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleMenu);

// Hide mobile menu after a menu item has been clicked

function hideMenu() {
  let menu = document.querySelector(".menu-container");
  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
  }
}

menuList = document.querySelector(".menu");
menuList.addEventListener("click", hideMenu);

// Toggle read more themovieapp

function readMorethemovieapp() {
  let morethemovieapp = document.querySelector(".read-more-themovieapp");
  let themovieappBtn = document.querySelector(".btn-toggle-themovieapp");
  morethemovieapp.classList.toggle("visible");

  if (morethemovieapp.classList.contains("visible")) {
    themovieappBtn.innerHTML = "Read less";
  } else {
    themovieappBtn.innerHTML = "Read more";
  }
}

let themovieappBtn = document.querySelector(".btn-toggle-themovieapp");

themovieappBtn.addEventListener("click", readMorethemovieapp);

// Toggle read more myflixapp

function readMoremyflixapp() {
  let moremyflixapp = document.querySelector(".read-more-myflixapp");
  let myflixappBtn = document.querySelector(".btn-toggle-myflixapp");
  moremyflixapp.classList.toggle("visible");

  if (moremyflixapp.classList.contains("visible")) {
    myflixappBtn.innerHTML = "Read less";
  } else {
    myflixappBtn.innerHTML = "Read more";
  }
}

let myflixappBtn = document.querySelector(".btn-toggle-myflixapp");

myflixappBtn.addEventListener("click", readMoremyflixapp);

// Add active class to currently clicked menu-item
let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    menuItems.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
