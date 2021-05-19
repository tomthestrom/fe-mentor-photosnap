const navbarBtn = document.querySelector("[data-btn-navbar]");
const navBar = document.querySelector("[data-header-nav]");
const navBarOpenClass = "nav--open";

navbarBtn.addEventListener("click", (e) => {
  const isNotExpanded = navbarBtn.getAttribute("aria-expanded") === "false";

  if (isNotExpanded) {
    navbarBtn.setAttribute("aria-expanded", "true");
  } else {
    navbarBtn.setAttribute("aria-expanded", "false");
  }

  navBar.classList.toggle(navBarOpenClass)
});