// toggle menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//hide upon clicking on close
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
//hide upon clicking on menu items
document.querySelectorAll(".nav__link").forEach((menuItem) =>
  menuItem.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);
