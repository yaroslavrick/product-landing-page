(function () {
  const slides = [
    `<div><img src="img/react-icon.svg" alt="React logo"></div>`,
    `<div><img src="img/vue_js_logo_2.svg" alt="Vue.js logo"></div>`,
    `<div><img src="img/angular_full_color_logo.svg" alt="Angular logo"></div>`,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      '.container__products_carousel .slide-container'
    );

    slideContainer.innerHTML = slides[slideIdx];

    // Responsive:
    if (window.innerWidth >= 500) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
    }
  }

  function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
  }

  function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    showCurrentSlide();
  }

  setInterval(nextSlide, 4000);
  showCurrentSlide();

  const nextButton = document.querySelector(
    '.container__products_carousel > .btn-next'
  );
  // Додаю обробник подій addEventListener('назва події', назва_функції):
  nextButton.addEventListener('click', nextSlide);

  const prevButton = document.querySelector(
    '.container__products_carousel > .btn-prev'
  );
  prevButton.addEventListener('click', prevSlide);

  // Обробник на зміну вікна браузера:
  window.addEventListener('resize', showCurrentSlide);
})();
