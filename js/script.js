const navEl = document.querySelector(".navigation");
const btnEl = document.querySelector(".navigation__button");
const overLayEl = document.querySelector(".over__lay");

//Mobile navigation

btnEl.addEventListener("click", () => {
  navEl.classList.toggle("open-nav");
});

overLayEl.addEventListener("click", () => {
  document.getElementById("navi-toggle").checked = false;
  navEl.classList.toggle("open-nav");
});

//Smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    document.getElementById("navi-toggle").checked = false;
    
    if (link.classList.contains("navigation__link")) {
      navEl.classList.remove("open-nav");
    }
  });
});
