// Navigation Scroll Effect
const nav = document.querySelector('nav');
const revealElements = document.querySelectorAll('.reveal');
const heroBg = document.querySelector('.hero-bg');

const handleScroll = () => {
    const scrollY = window.scrollY;

    // Nav change
    if (scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Subtle Hero Parallax
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.1}px)`;
    }

    // Reveal elements on scroll
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        mobileMenuBtn.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
