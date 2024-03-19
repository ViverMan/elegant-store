function swiper() {

const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        slidesPerView: "auto",
        spaceBetween: 12,
        // loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        },
    
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        breakpoints: {
            820: {
                slidesPerView: "auto",
                spaceBetween: 24,
            },
        },
    });     
}

export default swiper;

