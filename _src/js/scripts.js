const swiper = new Swiper('.reviewsSwiper', {

  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  // freeMode: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

const news = new Swiper(".newsSwiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

const blog = new Swiper(".blogSwiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

/*menu*/
const burgerMenu = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile__nav');
const languageItem = document.querySelectorAll('.language li');
console.log(languageItem)
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})

for (let item of languageItem) {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    for (let item of languageItem) {
      item.classList.remove('active')
    }

    item.classList.toggle('active')

  })
}