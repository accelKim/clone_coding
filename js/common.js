const faqLists = document.querySelectorAll('.faq-list');

faqLists.forEach((e) => {
    e.addEventListener('click', function () {
        this.classList.toggle('on');
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
