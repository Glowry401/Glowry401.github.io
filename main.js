// Shared JavaScript: mobile navigation and current year.
document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu with the Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navigation.classList.contains("open")) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    });
  }

  var year = new Date().getFullYear();
  var yearElements = document.querySelectorAll(".current-year");
  for (var i = 0; i < yearElements.length; i++) {
    yearElements[i].textContent = year;
  }
});
