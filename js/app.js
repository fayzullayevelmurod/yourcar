var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-nextt',
    prevEl: '.swiper-button-prevv',
  },
});

const bars = document.querySelector('.bars');
const navlink = document.querySelector('.header_links');

bars.addEventListener('click', function () {
  navlink.classList.toggle('nav_active');
});

function toggleDropdown() {
  let options = document.getElementById('options');
  options.style.display =
    options.style.display === 'block' ? 'none' : 'block';
}

function selectOption(option) {
  let selectBox = document.querySelector('.select-box span');
  selectBox.textContent = option;
  toggleDropdown();
}


function toggleDropdownKuziv() {
  let options = document.getElementById('optionsKuziv');
  options.style.display =
    options.style.display === 'block' ? 'none' : 'block';
}

function selectOptionKuziv(option) {
  let selectBox = document.querySelector('.select-box-kuziv span');
  selectBox.textContent = option;
  toggleDropdownKuziv();
}
