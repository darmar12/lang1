let swiper = new Swiper(".main__swiper", {
    loop: true,
    spaceBetween: 0,
});

let burgerMenu = document.querySelector('.header__nav--menu');
let burgerMenuClose = document.querySelector('.header__nav--close');
let burgerlist = document.querySelector('.header__list--mobileBox');
burgerMenu.addEventListener('click', function() {
    this.classList.add("hidden");
    burgerlist.classList.add("active");
    burgerMenuClose.classList.add("active");
});

burgerMenuClose.addEventListener('click', function() {
    this.classList.remove("active");
    burgerlist.classList.remove("active");
    burgerMenu.classList.remove("hidden");
});