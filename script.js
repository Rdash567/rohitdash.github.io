document.addEventListener('DOMContentLoaded', () => {
    // Add scroll effect for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add animation to sections on scroll
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        sections.forEach(section => {
            // Check if the section is in the viewport
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const viewportTop = window.scrollY;
            const viewportBottom = viewportTop + window.innerHeight;

            if (sectionBottom >= viewportTop && sectionTop <= viewportBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger animation on page load
});document.addEventListener('DOMContentLoaded', () => {
    // Add scroll effect for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add animation to sections on scroll
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollPosition > section.offsetTop) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger animation on page load
});
/* ... other styles ... */

