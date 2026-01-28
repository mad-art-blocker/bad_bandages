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
