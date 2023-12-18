var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },
});

const bars = document.querySelector(".bars");
const navlink = document.querySelector(".header_links");

bars.addEventListener("click", function () {
  navlink.classList.toggle("nav_active");
});
