document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });

    // Initialize AOS
    AOS.init({
        duration: 1200,
    });
});