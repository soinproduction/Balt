
const burgerBtn = document.querySelector(".burger-btn");
const mobileBox = document.querySelector(".mobile-box");
// const filterAside = document.querySelector(".filter-aside");
// const closeAside = document.querySelector(".close-filter");


burgerBtn.onclick = function() {
  burgerBtn.classList.toggle('active');
  mobileBox.classList.toggle('active');
};

let firstSlider = new Swiper('.first-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".first-slider__button--next",
      prevEl: ".first-slider__button--prev",
    },

    // breakpoints: {
    //   320: {
    //     slidesPerView: 1.8,
    //     spaceBetween: 30,
    //   },
    //   577: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //     navigation:false,
    //   },
    //   992: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    // }

  });

  let bigSlider = new Swiper('.big-slider', {
    slidesPerView: 2.5,
    spaceBetween: 70,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.big-pagination',
      type: 'bullets',
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 10,
        slidesPerView: 2,
      },

      1170: {
        spaceBetween: 70,
        slidesPerView: 2.5,
      }
    }

  });




