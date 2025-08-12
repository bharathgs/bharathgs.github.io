
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

function initializeEventListeners() {
    document.addEventListener('click', function(e) {
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


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Export for potential future module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToTop
    };
}