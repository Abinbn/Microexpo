document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    }

    // Initialize slick carousel
    $('.gallery').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

// Scroll to section function for button
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
    });
}
