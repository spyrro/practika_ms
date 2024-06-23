const swiper = new Swiper('.swiper', {

    loop: true, 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
    
    breakpoints: {
      1250: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 2,
      },
    },

  });