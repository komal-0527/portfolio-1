const toggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const allNavLinks = document.querySelectorAll(".nav a");

// Toggle menu
toggler.addEventListener("click", () => {
  aside.classList.toggle("open");
  document.body.classList.toggle("aside-open");
});

// Handle nav link clicks
allNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Highlight active link
    allNavLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");

    // Mobile: close menu and delay scroll
    if (window.innerWidth <= 991) {
      aside.classList.remove("open");
      document.body.classList.remove("aside-open");

      setTimeout(() => {
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // match your transition: 0.3s
    } else {
      // Desktop: scroll immediately
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
