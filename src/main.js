import './layouts/navbar.css';
import './layouts/footer.css';
import './stylesheets/helpers.css';

// Always keep global.css at the end to ensure it overrides other styles, specially for media queries.
import './global.css';

// WEBSITE TITLES PROPERTIES:
const titlesKeys = {
  webSiteTitle: 'Bad Bandages',
  // subTitle: "Malas Vendas"
};

// Website Title Name
const injectTitle = document.querySelectorAll('.siteTitleJS');
for (let it = 0; it < injectTitle.length; it++) {
  injectTitle[it].textContent = `${titlesKeys.webSiteTitle.toUpperCase()}`;
}

// Sub-title or Token:
// document.querySelector(".subTitlesJS").textContent = titlesKeys.subTitle;

// HAMBURGER MENU TOGGLE
const navbarToggle = document.querySelector('.navbar-toggleJS');
const navbarMenu = document.querySelector('.navbar-menuJS');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// Footer Date:
const serveYear = new Date();
const year = serveYear.getFullYear();

document.getElementById('thisYearJS').textContent = year;
