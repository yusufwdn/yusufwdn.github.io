const defaultMode = "dark";

const lightModeClass = {
  mode: "light",
  revertMode: "dark",
  iconSrc: "img/icon/moon.ico",
};

const darkModeClass = {
  mode: "dark",
  revertMode: "light",
  iconSrc: "img/icon/sun.ico",
};

/** set data when document loaded */
document.addEventListener("DOMContentLoaded", () => {
  /** set default mode */
  setMode(defaultMode);

  /** set default content when document loaded */
  document.getElementById("content").innerHTML = getContent("__about");
});

/** load navbar items */
document.querySelector(".__navbar").innerHTML = navbarItemsElements();

/** give function to .nav-links for changing the page */
var navbarLink = document.querySelectorAll(".nav-link");
navbarLink.forEach((element) => {
  element.addEventListener("click", (e) => {
    var elementClassList = e.target.classList;

    if (
      !elementClassList.contains("mode") &&
      !elementClassList.contains("mode__icon")
    ) {
      var existClass = document.querySelector(".nav__active");
      if (existClass) {
        existClass.classList.remove("nav__active");
      }

      elementClassList.add("nav__active");

      var pageDataAttribute = e.target.getAttribute("page-data");
      document.getElementById("content").innerHTML =
        getContent(pageDataAttribute);
    }
  });
});

/** set page mode (light or dark) */
document.querySelector(".mode__icon").addEventListener("click", (e) => {
  /** get currentMode */
  var currentMode = e.target.getAttribute("mode");

  /** change mode. this function from functions.js */
  setMode(currentMode);
});
