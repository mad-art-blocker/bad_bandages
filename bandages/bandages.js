// CSS imports
import "../src/stylesheets/ui-css/sidebars-grid.css";
import "./bandages.css";
import "../src/stylesheets/cards.css";
import "../src/stylesheets/animations.css";

// JavaScript imports
import "../src/index.js";
import "../src/scripts/intersectionObservers.js";

document.querySelector(".drawer-toggle").addEventListener(
  "click",
  toggleDrawer,
);
document.querySelector(".drawer-close").addEventListener(
  "click",
  toggleDrawer,
);

function toggleDrawer() {
  const drawer = document.querySelector(
    ".drawer",
  );
  if (!drawer) return;
  const isOpen = drawer.style.bottom === "0px" || drawer.style.bottom === "0";
  drawer.style.bottom = isOpen ? "-100%" : "0";
}
