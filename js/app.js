const newSlide = () => {
    const burger = document.querySelector('.nav-bar__burger');
    const nav = document.querySelector('.nav-bar__list');
    const navLinks = document.querySelectorAll('.nav-bar__item');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-bar__active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

newSlide();