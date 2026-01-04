class URLRouter {
    constructor() {
        this.setupRouting();
    }

    setupRouting() {
        window.addEventListener('popstate', (event) => {
            this.handleRouteChange(false); // false = don't update browser history
        });

        // Wait for dependencies before handling initial route
        this.waitForDependenciesAndRoute();
    }

    waitForDependenciesAndRoute() {
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max wait
        
        const checkInterval = setInterval(() => {
            attempts++;
            
            // Check if core dependencies are loaded
            const coreReady = window.workData && window.philosophyData;
            
            if (coreReady) {
                clearInterval(checkInterval);
                this.handleRouteChange(false);
                
                // If we have a pending article route, wait a bit more for MarkdownLoader
                const route = this.getCurrentRoute();
                if (route.type === 'article') {
                    this.waitForArticleDependencies(route.id);
                }
            } else if (attempts >= maxAttempts) {
                console.warn('Timeout waiting for core dependencies. Attempting route anyway...');
                clearInterval(checkInterval);
                this.handleRouteChange(false);
            }
        }, 100);
    }

    waitForArticleDependencies(articleId) {
        let attempts = 0;
        const maxAttempts = 30; // 3 seconds for article dependencies
        
        const checkInterval = setInterval(() => {
            attempts++;
            
            // Check if article dependencies are loaded
            const articleReady = window.writingsData && window.MarkdownLoader;
            
            if (articleReady) {
                clearInterval(checkInterval);
                // Re-handle the route now that dependencies are ready
                this.showArticle(articleId);
            } else if (attempts >= maxAttempts) {
                console.warn('Timeout waiting for article dependencies');
                clearInterval(checkInterval);
                // Fallback to writings page
                this.navigateToWritings();
            }
        }, 100);
    }

    getCurrentRoute() {
        const hash = window.location.hash.slice(1); // Remove #
        if (!hash) return { type: 'home' };

        const parts = hash.split('/');
        
        if (parts[0] === 'writings') {
            if (parts.length === 1) {
                return { type: 'writings' };
            } else if (parts.length === 2) {
                return { type: 'article', id: parts[1] };
            }
        } else if (parts[0] === 'work') {
            return { type: 'work' };
        } else if (parts[0] === 'philosophy') {
            return { type: 'philosophy' };
        }

        return { type: 'home' };
    }

    updateURL(path) {
        const newURL = window.location.origin + window.location.pathname + '#' + path;
        history.pushState({ path }, '', newURL);
    }

    handleRouteChange(updateHistory = true) {
        const route = this.getCurrentRoute();

        // Check if we have the necessary dependencies for the route
        if (!this.checkDependencies(route)) {
            return; // Wait for dependencies
        }

        switch (route.type) {
            case 'home':
                this.showLanding();
                break;
            case 'work':
                this.showWork();
                break;
            case 'philosophy':
                this.showPhilosophy();
                break;
            case 'writings':
                this.showWritings();
                break;
            case 'article':
                this.showArticle(route.id);
                break;
            default:
                this.showLanding();
        }
    }

    checkDependencies(route) {
        const coreReady = window.workData && window.philosophyData;
        
        if (!coreReady) return false;
        
        // For article routes, also check for writings dependencies
        if (route.type === 'article') {
            return window.writingsData && window.MarkdownLoader;
        }
        
        // For writings list, check for writings data
        if (route.type === 'writings') {
            return window.writingsData;
        }
        
        return true;
    }

    navigateToHome() {
        this.updateURL('');
        this.showLanding();
    }

    navigateToWork() {
        this.updateURL('work');
        this.showWork();
    }

    navigateToPhilosophy() {
        this.updateURL('philosophy');
        this.showPhilosophy();
    }

    navigateToWritings() {
        this.updateURL('writings');
        this.showWritings();
    }

    navigateToArticle(articleId) {
        this.updateURL(`writings/${articleId}`);
        this.showArticle(articleId);
    }

    // Display methods
    showLanding() {
        document.getElementById('landing').style.display = 'flex';
        document.getElementById('content').classList.remove('active');
        document.getElementById('writings').classList.remove('active');
        this.hideAllWritingPosts();
        window.scrollTo(0, 0);
    }

    showWork() {
        // Check if dependencies are available
        if (!window.workData) {
            console.warn('Work data not available yet');
            return;
        }
        
        document.getElementById('landing').style.display = 'none';
        document.getElementById('content').classList.add('active');
        document.getElementById('writings').classList.remove('active');
        this.hideAllWritingPosts();
        
        document.getElementById('work-section').style.display = 'block';
        document.getElementById('philosophy-section').style.display = 'none';
        this.updateNavButtons(0);
        window.scrollTo(0, 0);
    }

    showPhilosophy() {
        // Check if dependencies are available
        if (!window.philosophyData) {
            console.warn('Philosophy data not available yet');
            return;
        }
        
        document.getElementById('landing').style.display = 'none';
        document.getElementById('content').classList.add('active');
        document.getElementById('writings').classList.remove('active');
        this.hideAllWritingPosts();
        
        document.getElementById('work-section').style.display = 'none';
        document.getElementById('philosophy-section').style.display = 'block';
        this.updateNavButtons(1);
        window.scrollTo(0, 0);
    }

    showWritings() {
        // Check if dependencies are available
        if (!window.writingsData) {
            console.warn('Writings data not available yet');
            // Show writings page anyway, but with loading state
        }
        
        document.getElementById('landing').style.display = 'none';
        document.getElementById('content').classList.remove('active');
        document.getElementById('writings').classList.add('active');
        this.hideAllWritingPosts();
        window.scrollTo(0, 0);
    }

    async showArticle(articleId) {
        // Check if dependencies are available
        if (!window.writingsData || !window.MarkdownLoader) {
            console.warn('Article dependencies not available yet');
            this.waitForArticleDependencies(articleId);
            return;
        }
        
        document.getElementById('landing').style.display = 'none';
        document.getElementById('content').classList.remove('active');
        document.getElementById('writings').classList.remove('active');
        
        await this.loadAndShowArticle(articleId);
        window.scrollTo(0, 0);
    }

    async loadAndShowArticle(articleId) {
        try {
            const container = document.getElementById('writing-posts-container');
            container.innerHTML = this.getLoadingHTML();
            
            if (window.MarkdownLoader) {
                const article = await window.MarkdownLoader.loadArticle(articleId);
                container.innerHTML = window.MarkdownLoader.renderArticle(article);
            } else {
                throw new Error('MarkdownLoader not available');
            }
            
        } catch (error) {
            console.error('Failed to load article:', error);
            const container = document.getElementById('writing-posts-container');
            container.innerHTML = this.getErrorHTML(articleId);
        }
    }

    hideAllWritingPosts() {
        const container = document.getElementById('writing-posts-container');
        if (container) {
            container.innerHTML = '';
        }
    }

    updateNavButtons(activeIndex) {
        const buttons = document.querySelectorAll('.nav-button');
        buttons.forEach((btn, index) => {
            btn.classList.toggle('active', index === activeIndex);
        });
    }

    getLoadingHTML() {
        return `
            <div class="writing-post active">
                <div class="writings-container">
                    <a href="#" onclick="router.navigateToWritings(); return false;" class="back-link">← writings</a>
                    <div class="loading-state">
                        <p>Loading article...</p>
                    </div>
                </div>
            </div>
        `;
    }

    getErrorHTML(articleId) {
        return `
            <div class="writing-post active">
                <div class="writings-container">
                    <a href="#" onclick="router.navigateToWritings(); return false;" class="back-link">← writings</a>
                    <div class="error-state">
                        <h2>Article Not Found</h2>
                        <p>The article "${articleId}" could not be loaded.</p>
                        <button onclick="router.navigateToWritings()" class="retry-button">← Back to writings</button>
                    </div>
                </div>
            </div>
        `;
    }

    getShareableURL(articleId) {
        return `${window.location.origin}${window.location.pathname}#writings/${articleId}`;
    }
}

const router = new URLRouter();

function showContent() {
    router.navigateToWork();
}

function showLanding() {
    router.navigateToHome();
}

function showWritings() {
    router.navigateToWritings();
}

function showWork() {
    router.navigateToWork();
}

function showPhilosophy() {
    router.navigateToPhilosophy();
}

async function loadWritingPost(articleId) {
    router.navigateToArticle(articleId);
}

window.router = router;