// Scroll Progress Bar
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    
    scrollProgress.style.width = scrolled;
}

window.addEventListener('scroll', updateScrollProgress);

// Theme Switcher
document.addEventListener('DOMContentLoaded', () => {
    const minimalistIcon = document.getElementById('minimalist-icon');
    const colorOptions = document.querySelector('.color-options');
    
    // Toggle color options menu
    minimalistIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        colorOptions.style.display = 
            colorOptions.style.display === 'block' ? 'none' : 'block';
    });
    
    // Handle theme selection
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const theme = e.target.dataset.theme;
            document.body.className = `theme-${theme}`;
            colorOptions.style.display = 'none';
            
            // Save theme preference
            localStorage.setItem('preferredTheme', theme);
        });
    });
    
    // Close color options when clicking outside
    document.addEventListener('click', (e) => {
        if (!minimalistIcon.contains(e.target)) {
            colorOptions.style.display = 'none';
        }
    });
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        document.body.className = `theme-${savedTheme}`;
    }
});

// Animation for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});