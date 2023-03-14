// Mobile Menu

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

function mobileMenu() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};
menuLinks.addEventListener("click", hideMobileMenu);

// Form

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
const background = document.querySelector(".columns");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
  background.classList.add("blur-filter");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
  background.classList.remove("blur-filter");
});

// Scroll reveal left

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("load", reveal);
