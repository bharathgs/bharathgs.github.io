// Enhanced Theme Management with Auto Time Detection
function getTimeBasedTheme() {
    const hour = new Date().getHours();
    // Light mode from 6 AM to 6 PM, dark mode otherwise
    return (hour >= 6 && hour < 18) ? 'light' : 'dark';
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    
    // Save user preference to override auto-detection
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('theme-manual', 'true'); // Mark as manually set
}

function initializeTheme() {
    const isManuallySet = localStorage.getItem('theme-manual') === 'true';
    const savedTheme = localStorage.getItem('theme');
    
    let themeToUse;
    
    if (isManuallySet && savedTheme) {
        // User has manually set a preference, use that
        themeToUse = savedTheme;
    } else {
        // No manual preference, use time-based theme
        themeToUse = getTimeBasedTheme();
        // Don't save to localStorage so it continues to auto-update
    }
    
    document.documentElement.setAttribute('data-theme', themeToUse);
}

function resetToAutoTheme() {
    // Function to reset back to automatic time-based theming
    localStorage.removeItem('theme');
    localStorage.removeItem('theme-manual');
    initializeTheme();
}

// Check for theme changes every hour (optional - for long browsing sessions)
function setupAutoThemeUpdates() {
    const isManuallySet = localStorage.getItem('theme-manual') === 'true';
    
    if (!isManuallySet) {
        setInterval(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const timeBasedTheme = getTimeBasedTheme();
            
            if (currentTheme !== timeBasedTheme) {
                document.documentElement.setAttribute('data-theme', timeBasedTheme);
            }
        }, 60000 * 60); // Check every hour
    }
}

// Initialize theme when the script loads
initializeTheme();

// Start auto-update checking
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAutoThemeUpdates);
} else {
    setupAutoThemeUpdates();
}