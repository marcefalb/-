if (document.clientWidth >= 576) {
	const swiper = new Swiper('.swiper', {
	  // speed: 400,
	  // spaceBetween: 100,
	  // slidesPerView: 1,
	  spaceBetween: 10,
	  // autoplay: true,
	  loop: true,
	});
	const swiperItem = document.querySelector('.swiper').swiper;
}
else {
		const swiper = new Swiper('.swiper', {
	  speed: 400,
	  spaceBetween: 100,
	  slidesPerView: 1,
	  spaceBetween: 10,
	  autoplay: true,
	  loop: true,
	});
	const swiperItem = document.querySelector('.swiper').swiper;
}