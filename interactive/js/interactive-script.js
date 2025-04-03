// Interactive Theme Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {

    const namePlaceholder = document.getElementById('interactive-name-placeholder');

    if (namePlaceholder) {
        // Simple example: Change text color on click
        namePlaceholder.addEventListener('click', () => {
            // Generate a random color
            const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            namePlaceholder.style.color = randomColor;
        });

        // You could add more complex effects here, like letter animations or particle effects,
        // but that would typically require more complex JS or libraries.
    }

    // Add other interactive elements listeners here if needed
    // e.g., custom scroll animations, hover effects for specific elements

}); 