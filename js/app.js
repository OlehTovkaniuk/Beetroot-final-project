// MENU NAVIGATION ---------------------------------

const navSlide = () => {
    const blockMenu = document.querySelector('.menu__menuSetWrapper');
    const burger = document.querySelector('.menu__burger');
    const nav = document.querySelector('.menu__nav-links');
    const navLinks = document.querySelectorAll('.menu__nav-links li');

    blockMenu.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s forwards ${index / 7 + 0.5}s`
            }
        })

        // burger animation 
        burger.classList.toggle('toggled');
    });
}

navSlide();

// TYPING EFFECT

var i = 0;
var txt = 'Hello, happy Thursday!';
var speed = 70;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("greeting").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter());

// HOMEPAGE SLIDER --------------------------------------------

const slides = document.querySelectorAll('.sliderhome__slide'),
    next = document.querySelector('#next'),
    prev = document.querySelector('#prev'),
    auto = true,
    intervalTime = 6000;
let slideInterval;

const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // add current to next sibling
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // add current to prev sibling
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button Events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// auto slide
if (auto) {
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

// PRODUCTS SLIDER (DRAG TO SCROLL)

const slider = document.querySelector('.products__parent');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) / 1.2;
    slider.scrollLeft = scrollLeft - walk;
});

