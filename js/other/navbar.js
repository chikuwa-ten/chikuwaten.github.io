const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("navbar-mobile");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  overlay.classList.toggle("show");
  document.body.style.overflowY = "hidden";
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflowY = "auto";
});
