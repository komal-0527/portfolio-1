// Toggle style switcher panel
const styleSwitcher = document.querySelector(".style-switcher");
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Close switcher on scroll
window.addEventListener("scroll", () => {
  styleSwitcher.classList.remove("open");
});

// Theme color switching
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Toggle dark/light mode
const dayNight = document.querySelector(".day-night i");

document.querySelector(".day-night").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Toggle icon
  if (document.body.classList.contains("dark")) {
    dayNight.classList.remove("ri-moon-fill");
    dayNight.classList.add("ri-sun-fill");
  } else {
    dayNight.classList.remove("ri-sun-fill");
    dayNight.classList.add("ri-moon-fill");
  }
});

// Set correct icon on page load
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.classList.add("ri-sun-fill");
    dayNight.classList.remove("ri-moon-fill");
  } else {
    dayNight.classList.add("ri-moon-fill");
    dayNight.classList.remove("ri-sun-fill");
  }
});
