window.onscroll = function () {
  const nav = document.getElementById("nav");
  const fixedNav = nav.offsetTop;

  if (window.pageYOffset > fixedNav) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
};

const hmgBtn = document.getElementById("hamburger");
const navlists = document.getElementById("navlists");

hmgBtn.addEventListener("click", function () {
  hmgBtn.classList.toggle("hamburger-active");
  navlists.classList.toggle("hidden");
});
