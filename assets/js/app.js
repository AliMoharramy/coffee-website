// HAMBERGER SLIDE SHOW
const toggle = document.getElementById("nav-toggle");
const closebtn = document.getElementById("nav-close");
const navmenu = document.getElementById("nav__menu");
const home_scroll = document.querySelector(".home__scroll");
const nav_link = document.querySelectorAll(".nav__link");

function nav_slide() {
  navmenu.classList.add("nav_slide");
  home_scroll.style.zIndex = "-200";
}
closebtn.addEventListener("click", close_slide);

function close_slide() {
  navmenu.classList.remove("nav_slide");
  home_scroll.style.zIndex = "0";
}

toggle.addEventListener("click", nav_slide);

for (i = 0; i < 4; i++) {
  nav_link[i].addEventListener("click", close_slide);
}

// HEADER SCROLL COLOR
const header = document.getElementById("header");

window.onscroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

// SHOW PRODUCTS

const delicacies_selector = document.getElementById("delicacies-selector");
const coffee_selector = document.getElementById("coffee-selector");
const cake_selector = document.getElementById("cake-selector");
const delicacies = document.querySelectorAll(".delicacies");
const coffee = document.querySelectorAll(".coffee");
const cake = document.querySelectorAll(".cake");
const cards = document.querySelectorAll(".products__card");
const selectorsTitle = document.querySelectorAll(".products__select-title");

function delicaciesItems() {
  for (i = 0; i < 3; i++) {
    selectorsTitle[i].classList.remove("selected-product");
  }

  let numberCards = cards.length;
  for (i = 0; i < numberCards; i++) {
    cards[i].classList.remove("cards_show");
  }

  let number = delicacies.length;
  for (i = 0; i < number; i++) {
    delicacies[i].classList.add("cards_show");
  }
  selectorsTitle[0].classList.add("selected-product");
}

function coffeeItems() {
  for (i = 0; i < 3; i++) {
    selectorsTitle[i].classList.remove("selected-product");
  }

  let numberCards = cards.length;
  for (i = 0; i < numberCards; i++) {
    cards[i].classList.remove("cards_show");
  }

  let number = coffee.length;
  for (i = 0; i < number; i++) {
    coffee[i].classList.add("cards_show");
  }
  selectorsTitle[1].classList.add("selected-product");
}

function cakeItems() {
  for (i = 0; i < 3; i++) {
    selectorsTitle[i].classList.remove("selected-product");
  }

  let numberCards = cards.length;
  for (i = 0; i < numberCards; i++) {
    cards[i].classList.remove("cards_show");
  }

  let number = cake.length;
  for (i = 0; i < number; i++) {
    cake[i].classList.add("cards_show");
  }
  selectorsTitle[2].classList.add("selected-product");
}

delicacies_selector.addEventListener("click", delicaciesItems);
coffee_selector.addEventListener("click", coffeeItems);
cake_selector.addEventListener("click", cakeItems);

// MOVEUP BUTTON
const moveup__btn = document.querySelectorAll(".moveup__btn");

function upmove_btn() {
  if (window.scrollY >= 1050) {
    moveup__btn[0].classList.add("show__up");
  } else {
    moveup__btn[0].classList.remove("show__up");
  }
}
window.addEventListener("scroll", upmove_btn);

// LOAD COFFEE
onload = () => {
  const loadcoffee = document.getElementById("loadcoffee");
  setTimeout(() => {
    loadcoffee.style.display = "none";
  }, 2500);
};
