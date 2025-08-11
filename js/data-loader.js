// Dynamic Content Loader - Fixed Version
class ContentLoader {
    static loadWorkSection() {
        console.log('Loading work section...');
        const workSection = document.getElementById('work-section');
        if (workSection && window.workData) {
            workSection.innerHTML = window.workData.getHTML();
            console.log('Work section loaded successfully');
        } else {
            console.error('Work section loading failed:', {
                workSectionExists: !!workSection,
                workDataExists: !!window.workData
            });
        }
    }

    static loadPhilosophySection() {
        console.log('Loading philosophy section...');
        const philosophySection = document.getElementById('philosophy-section');
        if (philosophySection && window.philosophyData) {
            philosophySection.innerHTML = window.philosophyData.getHTML();
            console.log('Philosophy section loaded successfully');
        } else {
            console.error('Philosophy section loading failed:', {
                philosophySectionExists: !!philosophySection,
                philosophyDataExists: !!window.philosophyData
            });
        }
    }

    static loadWritingsList() {
        console.log('Loading writings list...');
        const writingsContainer = document.getElementById('writings-list');
        if (writingsContainer && window.writingsData) {
            writingsContainer.innerHTML = window.writingsData.getListHTML();
            console.log('Writings list loaded successfully');
        } else {
            console.error('Writings list loading failed:', {
                writingsContainerExists: !!writingsContainer,
                writingsDataExists: !!window.writingsData
            });
        }
    }

    static loadWritingPosts() {
        console.log('Loading writing posts...');
        const postsContainer = document.getElementById('writing-posts-container');
        if (postsContainer && window.writingsData) {
            postsContainer.innerHTML = window.writingsData.getPostsHTML();
            console.log('Writing posts loaded successfully');
        } else {
            console.error('Writing posts loading failed:', {
                postsContainerExists: !!postsContainer,
                writingsDataExists: !!window.writingsData
            });
        }
    }

    static initializeContent() {
        console.log('Initializing all content...');
        
        // Load all sections
        this.loadWorkSection();
        this.loadPhilosophySection();
        this.loadWritingsList();
        this.loadWritingPosts();
        
        console.log('Content initialization complete');
    }

    static checkDataAvailability() {
        const checks = {
            workData: !!window.workData,
            philosophyData: !!window.philosophyData,
            writingsData: !!window.writingsData
        };
        
        console.log('Data availability check:', checks);
        return Object.values(checks).every(Boolean);
    }
}

// Make ContentLoader available globally
window.ContentLoader = ContentLoader;

// Try to initialize content when all data is loaded
function waitForDataAndInitialize() {
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max wait
    
    const checkInterval = setInterval(() => {
        attempts++;
        
        if (ContentLoader.checkDataAvailability()) {
            console.log('All data available, initializing content...');
            ContentLoader.initializeContent();
            clearInterval(checkInterval);
        } else if (attempts >= maxAttempts) {
            console.error('Timeout waiting for data to load. Check your script tags and file paths.');
            clearInterval(checkInterval);
        }
    }, 100);
}

// Start checking for data availability
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForDataAndInitialize);
} else {
    waitForDataAndInitialize();
}