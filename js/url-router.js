
class URLRouter {
    constructor() {
        this.setupRouting();
    }

    setupRouting() {
        window.addEventListener('popstate', (event) => {
            this.handleRouteChange(false); // false = don't update browser history
        });

        this.handleRouteChange(false);
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
        document.getElementById('landing').style.display = 'none';
        document.getElementById('content').classList.remove('active');
        document.getElementById('writings').classList.add('active');
        this.hideAllWritingPosts();
        window.scrollTo(0, 0);
    }

    async showArticle(articleId) {
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
