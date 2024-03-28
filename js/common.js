const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const faqListItem = toggle.closest('.faq-list');

        faqListItem.classList.toggle('on');
    });
});

const gnb = document.querySelector('.gnb');
const ham = document.querySelector('.ham');
ham.addEventListener('click', (e) => {
    gnb.classList.toggle('on');
});


var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
