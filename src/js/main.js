// JavaScript to toggle the hamburger menu and display the navigation links as a dropdown
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    // Toggle the active class on the hamburger icon
    this.classList.toggle('active');

    // Toggle the display of the navigation links
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// JavaScript to close the dropdown menu when a menu link is clicked
var menuLinks = document.querySelectorAll('.nav-links a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Remove the 'active' class from the navigation links
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');

        // Remove the 'active' class from the hamburger icon
        var hamburgerMenu = document.querySelector('.hamburger-menu');
        hamburgerMenu.classList.remove('active');
    });
});

// JavaScript to hero slideshow
document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    // Function to show slide
    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Function to show next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Function to show previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Automatic slide transition
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});