// Fade in elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop watching after it fades in
        }
    });
    }, {
        threshold: 0.5  // Fade in only when 70% of the element is visible
    });

    document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});