// This script handles the smooth scroll to sections when clicking the nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the menu on mobile after selection
        if (window.innerWidth <= 768) {
            const header = document.querySelector('header');
            header.style.display = 'none';
        }
    });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    header.style.display = header.style.display === 'flex' ? 'none' : 'flex';
});
