let drop = false;
const burger = document.querySelector(".burger");
const nav = document.querySelector(".links");
const navLinks = document.querySelectorAll(".nav-links");
const burgerTop = document.querySelector("#b-top");
const burgerMiddle = document.querySelector("#b-middle");
const burgerBottom = document.querySelector("#b-bottom");

const navSlide = () => {
  burger.addEventListener("click", () => {
    if (drop == true) {
      nav.style.animation = `dropdown-rev 0.5s ease forwards`;

      navLinks.forEach((link, index) => {
        link.style.animation = `word-fade-rev 1s ease forwards`;
      });
      drop = false;
    } else if (drop != true) {
      nav.style.animation = `dropdown 0.5s ease forwards`;

      navLinks.forEach((link, index) => {
        link.style.animation = `word-fade 1s ease forwards`;
      });
      drop = true;
    }
  });
};
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
function app() {
  navSlide();
}
app();
