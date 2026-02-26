document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Automatically highlight the active page in Navbar
    // This looks at the browser URL and adds the 'active' class to the matching link
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    const menuLength = menuItems.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            // Remove active class from "Home" default
            document.querySelector('.nav-links a.active').classList.remove('active'); 
            // Add active class to current
            menuItems[i].className = "active";
        }
    }
});
