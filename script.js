document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu element
    var hamburgerMenu = document.querySelector('.hamburger');

    // Get the navigation element
    var navElement = document.querySelector('.nav');

    // Add a click event listener to the hamburger menu
    hamburgerMenu.addEventListener('click', function() {
        // Toggle the visibility of the navigation element
        navElement.classList.toggle('hidden');
    });
});
