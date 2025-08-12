// Dynamic Content Loader - Resilient Version
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
            console.warn('Writings list loading failed - writingsData not available');
            if (writingsContainer) {
                writingsContainer.innerHTML = `
                    <div class="no-writings">
                        <p>Writings section temporarily unavailable. Check back soon!</p>
                    </div>
                `;
            }
        }
    }

    static loadWritingPosts() {
        console.log('Initializing writing posts container...');
        const postsContainer = document.getElementById('writing-posts-container');
        if (postsContainer) {
            postsContainer.innerHTML = '';
            console.log('Writing posts container initialized');
        } else {
            console.error('Writing posts container not found');
        }
    }

    static initializeContent() {
        console.log('Initializing content with available data...');
        
        // Load sections that have data available
        if (window.workData) {
            this.loadWorkSection();
        } else {
            console.warn('workData not available');
        }
        
        if (window.philosophyData) {
            this.loadPhilosophySection();
        } else {
            console.warn('philosophyData not available');
        }
        
        // Always initialize writings container, even if no data
        this.loadWritingsList();
        this.loadWritingPosts();
        
        console.log('Content initialization complete with available data');
    }

    static checkCoreDataAvailability() {
        // Only check for essential data - work and philosophy
        const checks = {
            workData: !!window.workData,
            philosophyData: !!window.philosophyData
        };
        
        console.log('Core data availability check:', checks);
        return Object.values(checks).every(Boolean);
    }

    static checkAllDataAvailability() {
        // Check all data including writings
        const checks = {
            workData: !!window.workData,
            philosophyData: !!window.philosophyData,
            writingsData: !!window.writingsData
        };
        
        console.log('All data availability check:', checks);
        return Object.values(checks).every(Boolean);
    }
}

// Make ContentLoader available globally
window.ContentLoader = ContentLoader;

// Initialize content when core data is available
function waitForDataAndInitialize() {
    let attempts = 0;
    const maxAttempts = 30; // 3 seconds for core data
    
    const checkInterval = setInterval(() => {
        attempts++;
        
        // Load content if core data is available
        if (ContentLoader.checkCoreDataAvailability()) {
            console.log('Core data available, initializing content...');
            ContentLoader.initializeContent();
            clearInterval(checkInterval);
            
            // Continue checking for writings data in background
            setTimeout(() => {
                if (window.writingsData && document.getElementById('writings-list')) {
                    console.log('Writings data became available, updating writings section...');
                    ContentLoader.loadWritingsList();
                }
            }, 2000);
            
        } else if (attempts >= maxAttempts) {
            console.warn('Timeout waiting for core data. Attempting partial initialization...');
            ContentLoader.initializeContent(); // Try anyway
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
