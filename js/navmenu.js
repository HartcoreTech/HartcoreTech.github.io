const hamburger = document.querySelector('.hamburger');
const banner = document.querySelector('.banner');

hamburger.addEventListener('click', () => {
    banner.classList.toggle('active');
});