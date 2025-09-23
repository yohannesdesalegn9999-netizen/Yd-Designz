document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a class to the header on scroll to make it more prominent
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    });

    // Simple hover animation for project cards (can be done with CSS too)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
});
// Responsive nav toggle
const navToggle = document.getElementById('navToggle');
const navUl = document.querySelector('nav ul');
if (navToggle && navUl) {
    navToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });
}
// ...existing code...
