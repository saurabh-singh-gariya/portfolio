const menuIcon = document.querySelector(".mobile-menu-icon");
const navMenu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".nav-item");
const contactButton = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

contactButton.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.add("stop-scroll");
});

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("stop-scroll");
  })
);

let typed = new Typed(".changingTextContainer", {
  strings: ["Frontend Developer", "Backend Developer", "Full-Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
