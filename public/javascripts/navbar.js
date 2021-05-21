const navbarBtn = document.querySelector("[data-btn-navbar]");
const navBar = document.querySelector("[data-header-nav]");
const navBarOpenClass = "nav--header--open";

navbarBtn.addEventListener("click", (e) => {
  const isNotExpanded = navbarBtn.getAttribute("aria-expanded") === "false";

  if (isNotExpanded) {
    navbarBtn.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  } else {
    navbarBtn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "auto";
  }

  navBar.classList.toggle(navBarOpenClass)
});