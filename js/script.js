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

// set data when document loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("content").innerHTML = getContent("__about");
});

// load navbar items
document.querySelector(".__navbar").innerHTML = navbarItemsElements();

// give function to .nav-links for changing the page
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

// set page mode (light or dark)
var modeIcon = document.querySelector(".mode__icon");
modeIcon.setAttribute("src", "img/icon/sun.ico");
modeIcon.addEventListener("click", (e) => {
  var elementTarget = e.target;
  var body = document.querySelector("body");
  var currentMode = elementTarget.getAttribute("mode");
  var bodyClass, iconSrc, objectModeClass;

  // checking mode
  if (currentMode === lightModeClass.mode) {
    objectModeClass = lightModeClass;
  } else {
    objectModeClass = darkModeClass;
  }

  bodyClass = objectModeClass.mode;
  revertMode = objectModeClass.revertMode;
  iconSrc = objectModeClass.iconSrc;

  body.setAttribute("class", bodyClass);
  elementTarget.setAttribute("mode", revertMode);
  elementTarget.setAttribute("src", iconSrc);
});
