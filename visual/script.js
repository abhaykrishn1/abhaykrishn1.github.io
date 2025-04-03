// Scroll Progress Bar
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    // Handle cases where elements might not exist (e.g., in other themes)
    if (!scrollProgress) return; 
    
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Avoid division by zero if winHeightPx is 0
    const scrolled = winHeightPx > 0 ? `${(scrollPx / winHeightPx) * 100}%` : '0%';
    
    scrollProgress.style.width = scrolled;
}

window.addEventListener('scroll', updateScrollProgress);

// Global Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Optional: Unobserve after fade-in to improve performance
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);


// Setup after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Switcher Logic --- 
    const minimalistIcon = document.getElementById('minimalist-icon');
    const colorOptions = document.querySelector('.color-options');

    if (minimalistIcon && colorOptions) {
        // Toggle color options menu
        minimalistIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = minimalistIcon.getAttribute('aria-expanded') === 'true';
            colorOptions.style.display = isExpanded ? 'none' : 'block';
            minimalistIcon.setAttribute('aria-expanded', !isExpanded);
            colorOptions.setAttribute('aria-hidden', isExpanded);
        });
        
        // Handle theme selection
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const theme = e.target.dataset.theme;
                document.body.className = `theme-${theme}`;
                colorOptions.style.display = 'none';
                minimalistIcon.setAttribute('aria-expanded', 'false');
                colorOptions.setAttribute('aria-hidden', 'true');
                
                // Save theme preference
                localStorage.setItem('preferredTheme', theme);
            });
        });

        // Close color options when clicking outside
        document.addEventListener('click', (e) => {
            if (!minimalistIcon.contains(e.target)) {
                colorOptions.style.display = 'none';
                minimalistIcon.setAttribute('aria-expanded', 'false');
                colorOptions.setAttribute('aria-hidden', 'true');
            }
        });
    }
    
    // --- Load Saved/System Theme --- 
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        document.body.className = `theme-${savedTheme}`;
    } else {
        // Check for system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.className = 'theme-midnight';
        } else {
            document.body.className = 'theme-ocean'; // Default to ocean if no preference
        }
    }

    // --- Section Animation Observer --- 
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // --- Smooth Scrolling (Placeholder) --- 
    // Add navigation link smooth scrolling if needed in the future
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => { ... });

    // --- Mobile Menu (Placeholder) --- 
    // Add mobile menu toggle functionality if needed

});