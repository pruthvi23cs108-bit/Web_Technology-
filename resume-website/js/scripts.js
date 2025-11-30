document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element
    const mainContent = document.querySelector('.main-content');
    
    if (mainContent) {
        // Set initial opacity and add transition for smooth fading
        mainContent.style.opacity = 0;
        mainContent.style.transition = 'opacity 1s ease-in';

        // Animate the fade-in after a short delay
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 100);
    }
});
