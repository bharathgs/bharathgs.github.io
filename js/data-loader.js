
class ContentLoader {
    static loadWorkSection() {
        const workSection = document.getElementById('work-section');
        if (workSection && window.workData) {
            workSection.innerHTML = window.workData.getHTML();
        } else {
            console.error('Work section loading failed:', {
                workSectionExists: !!workSection,
                workDataExists: !!window.workData
            });
        }
    }

    static loadPhilosophySection() {
        const philosophySection = document.getElementById('philosophy-section');
        if (philosophySection && window.philosophyData) {
            philosophySection.innerHTML = window.philosophyData.getHTML();
        } else {
            console.error('Philosophy section loading failed:', {
                philosophySectionExists: !!philosophySection,
                philosophyDataExists: !!window.philosophyData
            });
        }
    }

    static loadWritingsList() {
        const writingsContainer = document.getElementById('writings-list');
        if (writingsContainer && window.writingsData) {
            writingsContainer.innerHTML = window.writingsData.getListHTML();
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
        const postsContainer = document.getElementById('writing-posts-container');
        if (postsContainer) {
            postsContainer.innerHTML = '';
        } else {
            console.error('Writing posts container not found');
        }
    }

    static initializeContent() {
        
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
        
        this.loadWritingsList();
        this.loadWritingPosts();
    }

    static checkCoreDataAvailability() {
        
        const checks = {
            workData: !!window.workData,
            philosophyData: !!window.philosophyData
        };
        
        
        return Object.values(checks).every(Boolean);
    }

    static checkAllDataAvailability() {
        
        const checks = {
            workData: !!window.workData,
            philosophyData: !!window.philosophyData,
            writingsData: !!window.writingsData
        };
        
        
        return Object.values(checks).every(Boolean);
    }
}


window.ContentLoader = ContentLoader;


function waitForDataAndInitialize() {
    let attempts = 0;
    const maxAttempts = 30; // 3 seconds for core data
    
    const checkInterval = setInterval(() => {
        attempts++;
        
        
        if (ContentLoader.checkCoreDataAvailability()) {
            ContentLoader.initializeContent();
            clearInterval(checkInterval);
            
            
            setTimeout(() => {
                if (window.writingsData && document.getElementById('writings-list')) {
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


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForDataAndInitialize);
} else {
    waitForDataAndInitialize();
}
