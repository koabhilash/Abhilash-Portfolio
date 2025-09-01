// This file contains the JavaScript code for the portfolio website. 
// It may include functionality such as interactivity, animations, or data fetching.

document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    toggleMenuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});