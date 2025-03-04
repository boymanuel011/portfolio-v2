function setCurrentYear() {
  const element = document.querySelector(".js-current-year");
  const year = new Date().getFullYear();
  if (element) {
    element.innerHTML = year.toString();
  }
}

function setupHeader() {
  const header = document.querySelector(".js-header");
  const menu = document.querySelector(".js-header-menu");
  const nav = document.querySelector(".js-sp-nav");
  const lineWrap = document.querySelector(".js-line-wrap");
  const navLinks = document.querySelectorAll(".js-nav-link");
  const logo = document.querySelector(".js-logo");
  const width = window.innerWidth;

  if (header) {
    window.addEventListener("scroll", function () {
      const docHeight = document.documentElement.scrollHeight;
      const screenHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalScrollable = docHeight - screenHeight;
      const scrollPercentage = Math.floor((scrollY / totalScrollable) * 100);

      if (width >= 767) {
        if (scrollY >= 80) {
          header.classList.add("header__srolled");
          header.style.setProperty("--after-width", `${scrollPercentage}%`);
        } else if (scrollY === 0) {
          header.classList.remove("header__srolled");
          header.style.setProperty("--after-width", "0%");
        }
      } else {
        if (scrollY >= 60) {
          header.classList.add("header__srolled");
          header.style.setProperty("--after-width", `${scrollPercentage}%`);
        } else if (scrollY === 0) {
          header.classList.remove("header__srolled");
          header.style.setProperty("--after-width", "0%");
        }
      }
    });

    menu.addEventListener("click", function () {
      nav.classList.toggle("header__link-wrap--active");
      lineWrap.classList.toggle("open");
      document.body.style.overflow = nav.classList.contains("header__link-wrap--active") ? "hidden" : "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        document.body.style.overflow = "";
        nav.classList.remove("header__link-wrap--active");
        lineWrap.classList.remove("open");
      });
    });

    logo.addEventListener("click", function () {
      document.body.style.overflow = "";
      nav.classList.remove("header__link-wrap--active");
      lineWrap.classList.remove("open");
    });
  }
}

function commonFunction() {
  console.log("common");
}

// Run all functions on DOM load
document.addEventListener("DOMContentLoaded", function () {
  setCurrentYear();
  setupHeader();
  commonFunction();
});
