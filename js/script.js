document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("content").innerHTML = getData("__about");
});

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
      document.getElementById("content").innerHTML = getData(pageDataAttribute);
    }
  });
});

var modeIcon = document.querySelector(".mode__icon");
modeIcon.setAttribute("src", "img/icon/sun.ico");
modeIcon.addEventListener("click", (e) => {
  var elementTarget = e.target;
  var mode = elementTarget.getAttribute("mode");
  var bodyClass, iconSrc;

  if (mode == "light") {
    bodyClass = "light";
    mode = "dark";
    iconSrc = "img/icon/moon.ico";
  } else {
    bodyClass = "dark";
    mode = "light";
    iconSrc = "img/icon/sun.ico";
  }

  document.querySelector("body").setAttribute("class", bodyClass);

  elementTarget.setAttribute("mode", mode);
  elementTarget.setAttribute("src", iconSrc);
});
