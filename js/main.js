// Main Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    console.log('Website initialized successfully');
    
    // Add any additional initialization logic here
    initializeEventListeners();
});

function initializeEventListeners() {
    // Add event listeners for any dynamic elements that might be added later
    document.addEventListener('click', function(e) {
        // Handle dynamic navigation clicks
        if (e.target.classList.contains('writing-link')) {
            e.preventDefault();
        }
        
        if (e.target.classList.contains('back-link')) {
            e.preventDefault();
        }
        
        if (e.target.classList.contains('read-more')) {
            e.preventDefault();
        }
        
        if (e.target.classList.contains('writings-link')) {
            e.preventDefault();
        }
    });
}

// Global utility functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Export for potential future module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToTop
    };
}