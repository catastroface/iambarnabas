// TOGGLE MENU
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

//TOGGLE SKILLS
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  //Autohide all other lists. Remove to keep them opened.
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
  // Manually close lists.
  // else if (itemClass === "skills__content skills__open") {
  //   this.parentNode.className = "skills__content skills__close";
  // }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

//Switching tabs in qualification section
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

//Services modal control
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloseBtns = document.querySelectorAll(".services__modal-close"),
  graySpace = document.querySelector(".services__modal");

const modalOpen = (modalClick) => {
  modalViews[modalClick].classList.add("active-modal");
};

const modalClose = (modalClick) => {
  modalViews[modalClick].classList.remove("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modalOpen(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn, j) => {
  modalCloseBtn.addEventListener("click", () => {
    modalClose(j);
  });
});
