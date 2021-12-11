const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperItem = document.querySelector('.swiper').swiper;

const tabsHeaders = document.querySelectorAll('.product__tabs_header span')
const tabsBodies  = document.querySelectorAll('.product__tabs_body div')
const tabActiveClass = 'product__tabs_active'

tabsHeaders.forEach(tabHeader => {
  tabHeader.addEventListener('click', event => {
    switch (event.target.id) {
      case 'description':
        classRemove(tabsHeaders, tabActiveClass)
        classRemove(tabsBodies, tabActiveClass)
        event.target.classList.add(tabActiveClass)
        tabsBodies[0].classList.add(tabActiveClass)
        break
      case 'specification':
        classRemove(tabsHeaders, tabActiveClass)
        classRemove(tabsBodies, tabActiveClass)
        event.target.classList.add(tabActiveClass)
        tabsBodies[1].classList.add(tabActiveClass)
        break
    }
  })
})
tabsHeaders[0].classList.add(tabActiveClass)
tabsBodies[0].classList.add(tabActiveClass)

function classRemove(array, activeClass) {
  array.forEach(item => item.classList.remove(activeClass))
}