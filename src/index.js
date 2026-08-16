import "./stylesheets/navbar.css";
import "./stylesheets/footer.css";
import "./stylesheets/containers.css";
import "./stylesheets/buttons.css";
import "./stylesheets/animations.css";
import "./stylesheets/helpers.css";

// Always keep global.css at the end, especially for media queries.
import "./globals.css";

// WEBSITE TITLES PROPERTIES:
const titlesKeys = {
  webSiteTitle: "Bad Bandages",
  // subTitle: "Malas Vendas"
};

// Website Title Name
const injectTitle = document.querySelectorAll(".siteTitleJS");
for (let it = 0; it < injectTitle.length; it++) {
  injectTitle[it].textContent = `${titlesKeys.webSiteTitle}`;
}

// Sub-title or Token:
// document.querySelector(".subTitlesJS").textContent = titlesKeys.subTitle;

// HAMBURGER MENU TOGGLE
const navbarToggle = document.querySelector(".navbar-toggleJS");
const navbarMenu = document.querySelector(".navbar-menuJS");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// FOOTER DATE" -->

const now = new Date();

const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formattedDate = now.toLocaleDateString("en-US", options);
const dateElement = document.getElementById("thisYearJS");
if (dateElement) {
  dateElement.textContent = formattedDate;
}
