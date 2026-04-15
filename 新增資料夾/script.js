document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const scrollElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');
    
    // Initially hide elements that should be animated on scroll to prevent flicker
    scrollElements.forEach(el => {
        const animationName = el.className.match(/(fade-in|fade-in-up|slide-in-left|slide-in-right)/)[0];
        el.classList.add('js-scroll');
        el.dataset.animation = animationName;
        // removing original classes to re-add them via observer
        el.classList.remove(animationName);
    });

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        const animation = element.dataset.animation;
        element.classList.add(animation);
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        })
    }

    // Trigger on load and on scroll
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Trigger once on load
    handleScrollAnimation();
});
