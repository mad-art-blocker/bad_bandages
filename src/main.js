import "./layouts/navbar.css";
import "./layouts/footer.css";
import "./stylesheets/helpers.css";

// Always keep global.css at the end to ensure it overrides other styles, specially for media queries.
import "./global.css";

// WEBSITE TITLES PROPERTIES:
let titlesKeys = {
  webSiteTitle: "Bad Bandages",
  // subTitle: "Malas Vendas"
};

// Website Title Name
let injectTitle = document.querySelectorAll(".siteTitleJS");
for (let it = 0; it < injectTitle.length; it++) {
  injectTitle[it].textContent = `${titlesKeys.webSiteTitle.toUpperCase()}`;
}

// Sub-title or Token:
// document.querySelector(".subTitlesJS").textContent = titlesKeys.subTitle;

// HAMBURGER MENU TOGGLE
let navbarToggle = document.querySelector(".navbar-toggle");
let navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Footer Date:
let serveYear = new Date();
let year = serveYear.getFullYear();

document.getElementById("thisYearJS").textContent = year;
