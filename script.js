const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header-image img" ,{
    ...scrollRevealOption,
    origin:"right",
  });
  ScrollReveal().reveal(".header-content h2" ,{
    ...scrollRevealOption,
    delay:500,
  });
  ScrollReveal().reveal(".header-content h1" ,{
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header-content .section-description" ,{
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".header-form form", {
    ...scrollRevealOption,
    delay: 2000,
  });
  
  ScrollReveal().reveal(".about-card ", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  const tabs = document.querySelector(".deals-tabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".deals-container .tab-content"
  );
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});


ScrollReveal().reveal(".choose-image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose-content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose-card", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".subscribe-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribe-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe-content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribe-content form", {
  ...scrollRevealOption,
  delay: 1500,
});


const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

function handleRegister(){
  let btn = document.getElementById("btn");
  location.assign("./register.html");
}
