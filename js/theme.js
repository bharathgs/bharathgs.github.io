function getTimeBasedTheme() {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? 'light' : 'dark';
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('theme-manual', 'true'); 
}

function initializeTheme() {
    const isManuallySet = localStorage.getItem('theme-manual') === 'true';
    const savedTheme = localStorage.getItem('theme');
    
    let themeToUse;
    
    if (isManuallySet && savedTheme) {
        themeToUse = savedTheme;
    } else {
        themeToUse = getTimeBasedTheme();
    }
    
    document.documentElement.setAttribute('data-theme', themeToUse);
}

function resetToAutoTheme() {
    localStorage.removeItem('theme');
    localStorage.removeItem('theme-manual');
    initializeTheme();
}

function setupAutoThemeUpdates() {
    const isManuallySet = localStorage.getItem('theme-manual') === 'true';
    
    if (!isManuallySet) {
        setInterval(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const timeBasedTheme = getTimeBasedTheme();
            
            if (currentTheme !== timeBasedTheme) {
                document.documentElement.setAttribute('data-theme', timeBasedTheme);
            }
        }, 60000 * 60);
    }
}

initializeTheme();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAutoThemeUpdates);
} else {
    setupAutoThemeUpdates();
}